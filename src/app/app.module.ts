import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {APP_ROUTING} from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { ElChavoComponent } from './components/el-chavo/el-chavo.component';

import { environment } from '../environments/environment';

import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '@ngui/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { ParticlesModule } from 'angular-particle';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElChavoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    NguiListModule,
    NguiInviewModule,
    NguiUtilsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ParticlesModule,
    ScrollToModule.forRoot(),
    HttpModule,
    RecaptchaModule,
    RecaptchaFormsModule

  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LdZCZ0UAAAAAIpkCA3rAXCLuW2Nvzfgva0rvPKZ' } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'en'
    },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
