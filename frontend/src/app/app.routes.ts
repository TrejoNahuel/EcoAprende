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
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: FormLoginComponent },
      { path: 'register', component: FormRegisterComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home-student',
        component: HomeStudentComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
          role: 'student',
          title: 'Inicio',
        },
      },
      {
        path: 'home-teacher',
        component: HomeTeacherComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
          role: 'teacher',
          title: 'Inicio',
        },
      },
      {
        path: 'missions',
        canActivate: [AuthGuard, RoleGuard],
        component: MissionsComponent,
        data: {
          role: 'student',
          title: 'Misiones',
        },
      },
      {
        path: 'modules',
        canActivate: [AuthGuard, RoleGuard],
        data: {
          role: 'student',
          title: 'Módulos',
        },
        children: [
          { path: '', component: AllModulesComponent },
          { path: ':id/lessons', component: LessonsComponent },
        ],
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
