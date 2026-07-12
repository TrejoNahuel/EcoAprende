import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {path: '', component: AuthLayoutComponent},
    {path: 'home', component: HomeComponent}
];
