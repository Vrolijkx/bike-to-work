import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TrajectApiModule} from './traject-api/traject-api.module';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {TrajectUiModule} from './traject-ui/traject-ui.module';
import {DashboardUiModule} from './dashboard-ui/dashboard-ui.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TrajectUiModule,
    TrajectApiModule.forRoot(environment.fireBaseConfig),
    DashboardUiModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
