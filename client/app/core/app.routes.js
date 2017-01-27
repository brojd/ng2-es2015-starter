import { LoginComponent } from '../auth/components/login/login.component';
import { AboutComponent } from '../feature_modules/about/components/about/about.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

export const routes = [
  
  // Logged out users
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  { path: 'about', component: AboutComponent, canActivate: [LoggedOutGuard] }
  
  // Logged in users
  //{ path: '', component: PtTimesheetsComponent, pathMatch: 'full', canActivate: [LoggedInGuard] }
  
];
