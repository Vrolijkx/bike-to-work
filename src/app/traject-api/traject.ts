import {FirebaseOperation} from 'angularfire2/database';

export interface Traject extends FirebaseOperation {
  name: string,
  start: string,
  end: string,
  distance: number
}
