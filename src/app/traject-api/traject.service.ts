import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Traject} from './Traject';
import * as firebase from 'firebase';

@Injectable()
export class TrajectService {
  private _trajects: FirebaseListObservable<Traject[]>;

  constructor(private angularFire: AngularFire) {
      this._trajects = this.angularFire.database.list('/trajects');
  }

  public get trajects(): FirebaseListObservable<Traject[]> {
    return this._trajects;
  }

  addTraject(traject: Traject): firebase.database.ThenableReference {
    return this._trajects.push(traject);
  }
}
