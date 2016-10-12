import { Component } from '@angular/core';
import {TrajectService} from '../traject-api/traject.service';
import {FirebaseListObservable} from 'angularfire2';
import {Traject} from '../traject-api/traject';

@Component({
  selector: 'app-trajects',
  templateUrl: './trajects.component.html',
  styleUrls: ['./trajects.component.css']
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

  deleteTraject(traject:Traject) {
    this.trajects.remove(traject);
  }

}
