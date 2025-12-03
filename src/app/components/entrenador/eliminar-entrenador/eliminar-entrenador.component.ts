import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Entrenador } from '../../../models/entrenador';
import { FormsModule } from '@angular/forms';
import { EntrenadorService } from '../../../services/entrenador.service';

@Component({
  selector: 'app-eliminar-entrenador',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './eliminar-entrenador.component.html',
  styleUrl: './eliminar-entrenador.component.css'
})
export class EliminarEntrenadorComponent {
  //Crear un entrenador vacio, para vincularlo de manera bi - direccional
  //Cualquier cambio en el HTML se refleja en TS
  //Cualquier cambio en el TS se refleja en HTML
  entrenador: Entrenador = {
    id: 0,
    nombre: "",
    nacionalidad: "",
    experiencia: 0
  }

  constructor(
    private entrenadorService: EntrenadorService,
    private rutaActiva: ActivatedRoute) {

  }

  ngOnInit(): void {
    const entrenadorId=this.rutaActiva.snapshot.paramMap.get('id');
    this.entrenadorService.getEntrenadorById(entrenadorId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.entrenador = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer el entrenador");
      }
    })
  }

  eliminar(){
    //1.- Registrarse
    //2.- Hacer login
    //3.- En el login Guardar el token en localStorage
    //4.- Cuando se crea, actualiza o elimina, podemos hacer in interceptor para agregar el Token a la solicitud
    alert("Para eliminiar requiere el token, entonces es necesario registrarse y hacer login");
  }
}
