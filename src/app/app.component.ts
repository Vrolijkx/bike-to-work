import {TrajectService} from './traject-api/traject.service';
import {AngularFire, FirebaseAuthState} from 'angularfire2';
import {Component} from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {


  constructor(angularFire: AngularFire, private trajectService: TrajectService ) {
    angularFire.auth.concatMap((authState: FirebaseAuthState) => {
      console.log('AUTH:', authState);
      if(!authState) {
        return Promise.resolve(angularFire.auth.login());
      }
      return Promise.resolve(authState);
    }).subscribe(() => {});
  }
}
