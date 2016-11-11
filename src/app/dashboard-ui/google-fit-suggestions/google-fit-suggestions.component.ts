import { Component, OnInit } from '@angular/core';
import {PotentialRideService, PotentialRide} from './potential-ride.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-google-fit-suggestions',
  templateUrl: './google-fit-suggestions.component.html',
  styleUrls: ['./google-fit-suggestions.component.css']
})
export class GoogleFitSuggestionsComponent implements OnInit {
  potentialRides: Observable<PotentialRide[]>;

  constructor(private potentialRideService: PotentialRideService) {
    this.potentialRides = this.potentialRideService.potentialRides;

  }

  accept(potentialRide: PotentialRide) {
    this.potentialRideService.markPotentialRideAsOk(potentialRide);
  }

  ngOnInit() {
  }

}
