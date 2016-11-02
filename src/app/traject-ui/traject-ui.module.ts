import { NgModule } from '@angular/core';
import {TrajectsComponent} from './trajects/trajects.component';
import {TrajectLineComponent} from './traject-line/traject-line.component';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TrajectsComponent, TrajectLineComponent],
  exports: [TrajectsComponent]
})
export class TrajectUiModule { }
