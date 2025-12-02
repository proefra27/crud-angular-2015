import { Routes } from '@angular/router';
import { ListadoEntrenadoresComponent } from './components/entrenador/listado-entrenadores/listado-entrenadores.component';
import { ActualizarEntrenadorComponent } from './components/entrenador/actualizar-entrenador/actualizar-entrenador.component';
import { EliminarEntrenadorComponent } from './components/entrenador/eliminar-entrenador/eliminar-entrenador.component';
import { AgregarEntrenadorComponent } from './components/entrenador/agregar-entrenador/agregar-entrenador.component';

export const routes: Routes = [
  {path:'entrenadores', component:ListadoEntrenadoresComponent},
  {path:'entrenadores/editar/:id',component:ActualizarEntrenadorComponent},
  {path:'entrenadores/eliminar/:id',component:EliminarEntrenadorComponent},
  {path:'entrenadores/agregar',component:AgregarEntrenadorComponent}
];
