import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LogoutViewComponent } from './views/logout-view/logout-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    LoginViewComponent,
    LogoutViewComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }
