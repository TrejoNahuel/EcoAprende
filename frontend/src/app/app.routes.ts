import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormLoginComponent } from './pages/inicio/form-login/form-login.component';
import { FormRegisterComponent } from './pages/inicio/form-register/form-register.component';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { HomeTeacherComponent } from './pages/teacher/home-teacher/home-teacher.component';
import { AllModulesComponent } from './pages/student/all-modules/all-modules.component';
import { LessonsComponent } from './pages/student/lessons/lessons.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
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
        path: '',
        canActivate: [AuthGuard],
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'missions', component: MissionsComponent },
            {
                path: 'modules',
                canActivate: [RoleGuard],
                data: {
                    role: 'student'
                },
                children: [
                    { path: '', component: AllModulesComponent },
                    { path: ':id/lessons', component: LessonsComponent }
                ]
            },
        ]
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
