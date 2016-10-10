import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TrajectApiModule} from './traject-api/traject-api.module';
import {environment} from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TrajectApiModule.forRoot(environment.fireBaseConfig)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
