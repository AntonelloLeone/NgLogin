import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { CreaArticleComponent } from './crea/crea.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'create-article',
    component: CreaArticleComponent,
  },
];
