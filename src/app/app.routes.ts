import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { ViewCustomerDetailsComponent } from './customers/view-customer-details/view-customer-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./customers/all-customers/all-customers.component').then(
            (m) => m.AllCustomersComponent
          ),
      },
      {
        path: 'my-customers',
        loadComponent: () =>
          import('./customers/my-customers/my-customers.component').then(
            (m) => m.MyCustomersComponent
          ),
      },
      {
        path: 'add',
        component: AddCustomersComponent,
        canActivate: [authGuard],
        data: {
          role: 'User',
        },
      },
      {
        path: 'view/:id',
        component: ViewCustomerDetailsComponent,
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./customers/edit-customers/edit-customers.component').then(
            (m) => m.EditCustomersComponent
          ),
      },
    ],
  },
];
