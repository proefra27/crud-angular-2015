import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoEntrenadoresComponent } from "./components/entrenador/listado-entrenadores/listado-entrenadores.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ListadoEntrenadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eje_10_eam';
}
