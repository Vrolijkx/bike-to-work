import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TrajectApiModule} from './traject-api/traject-api.module';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TrajectUiModule} from './traject-ui/traject-ui.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TrajectUiModule,
    TrajectApiModule.forRoot(environment.fireBaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
