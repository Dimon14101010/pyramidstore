import {Routes} from "@angular/router";

import {FirstPageComponent} from "./first-page/first-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BackOfficeComponent} from "./dashboard/backoffice/back-office.component";
import {DocumentsComponent} from "./dashboard/documents/documents.component";
import {ShopComponent} from "./dashboard/shop/shop.component";
import {ContactsComponent} from "./dashboard/contacts/contacts.component";
import {NewsComponent} from "./dashboard/news/news.component";

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
      {path: '', redirectTo: 'news', pathMatch: 'full'},
      {path: 'news', component: NewsComponent},
      {path: 'backOffice', component: BackOfficeComponent},
      {path: 'documents', component: DocumentsComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'contacts', component: ContactsComponent}
    ]
  }
];
