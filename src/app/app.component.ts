import {TrajectService} from './traject-api/traject.service';
import {AngularFire, FirebaseAuthState} from 'angularfire2';
import {Component} from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-root',
  template: `
<md-toolbar color="primary">
  <span>Bike to work</span>
</md-toolbar>
<main>
  <router-outlet></router-outlet>
</main>
`
})
export class AppComponent {

  constructor(angularFire: AngularFire, private trajectService: TrajectService ) {
    angularFire.auth.concatMap((authState: FirebaseAuthState) => {
      if(!authState) {
        return Promise.resolve(angularFire.auth.login());
      }
      return Promise.resolve(authState);
    }).subscribe(() => {});
  }
}
