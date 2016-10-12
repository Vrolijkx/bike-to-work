import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TrajectApiModule} from './traject-api/traject-api.module';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { TrajectsComponent } from './trajects/trajects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TrajectApiModule.forRoot(environment.fireBaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TrajectsComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
