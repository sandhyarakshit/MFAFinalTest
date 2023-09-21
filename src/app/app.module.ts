import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VerifyService } from './service/verify.service';
import { EnrollFactorComponent } from './components/enrollment/enrollment.component';
import { UserDataService } from './service/userdata.service';
import { FactorEnrollService } from './service/enroll/factor-enroll.service';
import { EnrollfactorComponent } from './components/enroll-factor/enrollfactor/enrollfactor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EnrollFactorComponent,
    EnrollfactorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ VerifyService, UserDataService, FactorEnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
