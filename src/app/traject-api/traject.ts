import 'firebase';

export interface Traject {
  name: string,
  start: string,
  end: string,
  distance: number
}

export interface PersistedTraject extends Traject, firebase.database.DataSnapshot {

}
