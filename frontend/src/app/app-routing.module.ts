import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { UserComponent } from 'src/app/components/user/user.component';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'admin/employee', component: EmployeeComponent},
  { path: 'admin/user', component: UserComponent },
  {path:'admin/persona', component:PersonaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }