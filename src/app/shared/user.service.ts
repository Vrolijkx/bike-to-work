import {Observable} from 'rxjs';
import {FirebaseAuthState, AngularFire} from 'angularfire2';
import {Injectable} from '@angular/core';

export interface User {
  userId: String;
}


@Injectable
export class UserService {

  constructor(private angularFire:AngularFire) {
  }

  public loginIfNotAuthenticated(): Observable<User> {
    this.angularFire.auth.concatMap((authState: FirebaseAuthState) => {
      if(!authState) {
        return Promise.resolve(this.angularFire.auth.login());
      }
      return Promise.resolve(authState);
    });
  }


  private toUser(authState: FirebaseAuthState): User {

  }


}
