import {Injectable} from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs';
import 'rxjs';


export interface PotentialRide {
  $key: string,
  distanceInMeter: number;
  startTime: Date;
  endTime: Date;
}

@Injectable()
export class PotentialRideService {
  private _potentialRide: Observable<PotentialRide[]>;
  private currentUserId: string;

  constructor(private angularFire: AngularFire) {
    this._potentialRide = this.angularFire.auth
      .filter((auth) => !!auth)
      .concatMap((auth: FirebaseAuthState) => {
        this.currentUserId = auth.uid;
        return this.createPotentialRidesObservableForUser(auth.uid);
      });
  }

  private createPotentialRidesObservableForUser(userId: string): FirebaseListObservable<PotentialRide[]> {
    return this.angularFire.database.list('/users/' + userId  + '/potentialRides/');
  }

  public get potentialRides(): Observable<PotentialRide[]> {
    return this._potentialRide;
  }

  public markPotentialRideAsOk(potentialRide: any) {
    console.log('potential ride', potentialRide);

    this.backupPotentialRide(potentialRide);
    this.angularFire.database.list('/user/' + this.currentUserId + '/rides').push({
      distance: 25,
      value: 25 * 0.23
    });
  }

  public discardPotentialRide(potentialRide: PotentialRide) {
    this.createPotentialRidesObservableForUser(this.currentUserId).remove(<any>potentialRide);
    this.backupPotentialRide(potentialRide);
  }

  private backupPotentialRide(potentialRide: PotentialRide | any) {
    console.log(potentialRide);

    this.angularFire.database.list('/users/' + this.currentUserId + '/potentialRidesBackup/').push(potentialRide);
  }

}
