import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CenterDivComponent } from './components/center-div/center-div.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    
];
