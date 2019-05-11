import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

