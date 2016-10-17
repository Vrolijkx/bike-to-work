import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Traject} from "../traject-api/traject";
import {emit} from "cluster";

@Component({
  selector: 'traject-line',
  template: '<span>{{traject.name}}</span><span>{{traject.distance}}</span><button (click)="deleteRow()">Delete Row</button>'
})

export class TrajectLineComponent implements OnInit {

  @Input()
  private traject:Traject;

  @Output()
  private deleteTraject:EventEmitter<Traject> = new EventEmitter<Traject>();

  constructor() { }

  ngOnInit() {
  }

  deleteRow() {
    this.deleteTraject.emit(this.traject);
  }

}
