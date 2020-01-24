import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { UserComponent } from 'src/app/components/user/user.component';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import {LeyComponent} from 'src/app/components/ley/ley.component';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminCrudComponent } from './components/admin-crud/admin-crud.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RolComponent } from './components/rol/rol.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { VotosComponent } from './components/votos/votos.component';
import { InteraccionComponent } from './components/interaccion/interaccion.component';
import { PublicacionleyComponent } from './components/publicacionLey/publicacionley.component';
import { PeriodoComponent } from './components/periodo/periodo.component';



const routes: Routes = [
  {path: 'admin/employees', component: EmployeeComponent},
  {path: 'admin/users', component: UserComponent },
  {path:'admin/personas', component:PersonaComponent},
  {path:'admin/login', component:LoginComponent},
  {path:'admin/admincrud', component:AdminCrudComponent},
  {path:'admin/ley', component:LeyComponent},
  {path:'admin/historial', component:HistorialComponent},
  {path:'admin/ciudadano', component:CiudadanoComponent},
  {path:'admin/rol', component:RolComponent},
  {path:'admin/interaccion', component:InteraccionComponent},
  {path:'admin/votos', component:VotosComponent},
  {path:'admin/publicacionley', component:PublicacionleyComponent},
  {path:'admin/comentarios', component:ComentarioComponent},
  {path:'admin/articulo', component:ArticuloComponent},
  {path:'admin/periodo', component:PeriodoComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }