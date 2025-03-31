import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateRfqComponent } from './pages/createRfq/createRfq.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:LandingComponent,
        title:'Home'
    },
    {
        path:'register',
        component:RegistrationComponent,
    },
    {
        path:'create-rfq',
        component:CreateRfqComponent,
    },
];
