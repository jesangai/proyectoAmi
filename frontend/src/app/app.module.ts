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


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    PersonaComponent
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
             
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
