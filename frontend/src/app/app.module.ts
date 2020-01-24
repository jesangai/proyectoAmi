import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LeyComponent } from './components/ley/ley.component';
import { HistorialComponent } from './components/historial/historial.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { RolComponent } from './components/rol/rol.component';
import { InteraccionComponent } from './components/interaccion/interaccion.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminCrudComponent } from './components/admin-crud/admin-crud.component';
import { VotosComponent } from './components/votos/votos.component';
import { PublicacionleyComponent } from './components/publicacionLey/publicacionley.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { PeriodoComponent } from './components/periodo/periodo.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    PersonaComponent,  
    LeyComponent, 
    HistorialComponent, 
    CiudadanoComponent,
    PeriodoComponent,
    LoginComponent, AdminCrudComponent, RolComponent, InteraccionComponent, VotosComponent, PublicacionleyComponent, ComentarioComponent, ArticuloComponent, PeriodoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'admin/employees',
        component:EmployeeComponent
      },
      {
        path: 'admin/users',
        component:UserComponent
      },
      {
        path: 'admin/personas',
        component:PersonaComponent
      }, 
      {
        path: 'admin/ley',
        component:LeyComponent
      },
      {
        path: 'admin/historial',
        component:HistorialComponent
      },
      {
        path: 'admin/ciudadano',
        component:CiudadanoComponent
      },
      {
        path: 'admin/rol',
        component:RolComponent
      },
      {
        path: 'admin/interaccion',
        component:InteraccionComponent
      },
      {
        path: 'admin/periodo',
        component:PeriodoComponent
      },
      {
        path: 'admin/login',
        component:LoginComponent
      }, 
      {
        path: 'admin/admincrud',
        component:AdminCrudComponent
      }, 
      {
        path: 'admin/votos',
        component:VotosComponent
      },  
      {
        path: 'admin/publicacionley',
        component:PublicacionleyComponent
      }, 
      {
        path: 'admin/comentarios',
        component:ComentarioComponent
      }, 
      {
        path: 'admin/articulo',
        component:ArticuloComponent
      }, 

    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
