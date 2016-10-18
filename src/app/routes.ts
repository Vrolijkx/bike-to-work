import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TrajectsComponent} from './traject-ui';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'trajects', component: TrajectsComponent},

];
