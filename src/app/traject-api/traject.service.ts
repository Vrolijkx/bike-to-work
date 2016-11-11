import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Traject, PersistedTraject} from './traject';

@Injectable()
export class TrajectService {
  private _trajects: FirebaseListObservable<Traject[]>;

  constructor(private angularFire: AngularFire) {
      this._trajects = this.angularFire.database.list('/trajects');
  }

  public get trajects(): FirebaseListObservable<Traject[]> {
    return this._trajects;
  }

  public addTraject(traject: Traject): Promise<Traject> {
    return Promise.resolve(this._trajects.push(traject));
  }

  public removeTraject(traject: PersistedTraject): Promise<any> {
    return Promise.resolve(this._trajects.remove(<any>traject));
  }
}
