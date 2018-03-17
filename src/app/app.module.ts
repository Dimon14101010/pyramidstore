import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BackendService } from "./services/backend.service";
import {BackOfficeComponent} from "./dashboard/backoffice/back-office.component";
import {DocumentsComponent} from "./dashboard/documents/documents.component";

import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FirstPageComponent,
    DashboardComponent,
    BackOfficeComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
