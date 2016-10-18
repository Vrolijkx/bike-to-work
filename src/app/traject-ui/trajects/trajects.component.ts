import { Component } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {Traject, PersistedTraject, TrajectService} from '../../traject-api';

@Component({
  selector: 'app-trajects',
  templateUrl: './trajects.component.html',
})
export class TrajectsComponent {
  trajects: FirebaseListObservable<Traject[]>;

  constructor(private trajectService: TrajectService) {
    this.trajects = trajectService.trajects;
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

  deleteTraject(traject :PersistedTraject) {
    this.trajectService.removeTraject(traject);
  }

}
