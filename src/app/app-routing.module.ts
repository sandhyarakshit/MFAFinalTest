import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EnrollFactorComponent } from './components/enrollment/enrollment.component';
import { EnrollfactorComponent } from './components/enroll-factor/enrollfactor/enrollfactor.component';

const routes: Routes = [
  { path : 'verify/:userId/:factorId',
  component : HomeComponent},
  {
    path : '',
    component :LoginComponent
  },
  {
    path: 'enroll',
    component: EnrollFactorComponent

  },
  {
    path: 'enroll/:userId',
    component:EnrollfactorComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
