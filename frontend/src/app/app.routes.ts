import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormLoginComponent } from './pages/inicio/form-login/form-login.component';
import { FormRegisterComponent } from './pages/inicio/form-register/form-register.component';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { HomeTeacherComponent } from './pages/teacher/home-teacher/home-teacher.component';

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
    {
        path: 'home-student',
        component: HomeStudentComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
            role: 'student'
        }
    },
    {
        path: 'home-teacher',
        component: HomeTeacherComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
            role: 'teacher'
        }
    },
];
