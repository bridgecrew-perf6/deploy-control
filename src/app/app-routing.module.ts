import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'projects'
, loadChildren: async() =>(await import('./modules/projects/projects.module')).ProjectsModule},
  { path:'auth',loadChildren: async() =>(await import('./modules/login/login.module')).LoginModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
