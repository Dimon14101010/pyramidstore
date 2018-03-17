import {Routes} from "@angular/router";

import {FirstPageComponent} from "./first-page/first-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BackOfficeComponent} from "./dashboard/backoffice/back-office.component";
import {DocumentsComponent} from "./dashboard/documents/documents.component";

export const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'backOffice', component: BackOfficeComponent},
      {path: 'documents', component: DocumentsComponent}
    ]
  }
];
