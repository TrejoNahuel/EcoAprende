import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormLoginComponent } from './pages/inicio/form-login/form-login.component';
import { FormRegisterComponent } from './pages/inicio/form-register/form-register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '', 
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: FormLoginComponent },
            { path: 'register', component: FormRegisterComponent }
        ]
    },
    {
        path: 'home', 
        component: HomeComponent
    },
];
