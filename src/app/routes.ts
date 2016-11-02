import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard-ui';
import {TrajectsComponent} from './traject-ui';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'trajects', component: TrajectsComponent},

];
