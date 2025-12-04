import { Routes } from '@angular/router';
import { ListadoEntrenadoresComponent } from './components/entrenador/listado-entrenadores/listado-entrenadores.component';
import { ActualizarEntrenadorComponent } from './components/entrenador/actualizar-entrenador/actualizar-entrenador.component';
import { EliminarEntrenadorComponent } from './components/entrenador/eliminar-entrenador/eliminar-entrenador.component';
import { AgregarEntrenadorComponent } from './components/entrenador/agregar-entrenador/agregar-entrenador.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';

//Proteger con guards
//Agregar el token en las solicitudes: PUT, POST, DELETE - Requiere Token
export const routes: Routes = [
  {path:'entrenadores', component:ListadoEntrenadoresComponent},
  {path:'entrenadores/editar/:id',component:ActualizarEntrenadorComponent},
  {path:'entrenadores/eliminar/:id',component:EliminarEntrenadorComponent},
  {path:'entrenadores/agregar',component:AgregarEntrenadorComponent},

  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
];
