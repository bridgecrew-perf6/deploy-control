import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LogoutViewComponent } from './views/logout-view/logout-view.component';

const routes: Routes = [
    {path:'signin',component:LoginViewComponent},
    {path:'signout',component:LogoutViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
