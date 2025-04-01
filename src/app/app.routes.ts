import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateRfqComponent } from './pages/createRfq/createRfq.component';
import { RfqListComponent } from './pages/RfqList/RfqList.component';
import { RfqsComponent } from './pages/Rfqs/Rfqs.component';
import { OpenRfqComponent } from './pages/open-rfq/open-rfq.component';

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
    {
        path:'my-rfq',
        component:RfqListComponent,
    },
    {
        path:'rfqs',
        component:RfqsComponent,
    },
    {
        path:'openrfq/:id',
        component:OpenRfqComponent,
    }
];
