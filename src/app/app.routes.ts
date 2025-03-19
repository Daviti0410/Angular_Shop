import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

import {AppMainComponent} from './components/app-main/app-main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppMainComponent }
];
