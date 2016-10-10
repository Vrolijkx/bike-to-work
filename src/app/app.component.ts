import {TrajectService} from './traject-api/traject.service';
import {FirebaseListObservable, AngularFire, FirebaseAuthState} from 'angularfire2';
import {Traject} from './traject-api/Traject';
import 'rxjs';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  trajects: FirebaseListObservable<Traject[]>;

  constructor(angularFire: AngularFire, private trajectService: TrajectService ) {
    angularFire.auth.asObservable().concatMap((authState: FirebaseAuthState) => {
      console.log('AUTH:', authState);
      if(!authState) {
        return Promise.resolve(angularFire.auth.login());
      }
      return Promise.resolve(authState);
    }).subscribe((auth: FirebaseAuthState) => this.initializeApp());
  }

  private initializeApp() {
    this.trajects = this.trajectService.trajects;
  }

  openNewTrajectPage() {
    alert('adding new traject');
    this.trajectService.addTraject({
      name: 'Kristof van thuis',
      distance: 25,
      start: 'Akkerstraat 21, Hechtel',
      end: 'Herkerodensingle 8B, Hasselt'
    });
  }
}
