import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Entrenador } from '../../../models/entrenador';
import { FormsModule } from '@angular/forms';
import { EntrenadorService } from '../../../services/entrenador.service';

@Component({
  selector: 'app-actualizar-entrenador',
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-entrenador.component.html',
  styleUrl: './actualizar-entrenador.component.css'
})
export class ActualizarEntrenadorComponent {
  //Un entrador vacio
  entrenador:Entrenador={
    id:0,
    nombre:"",
    nacionalidad:"",
    experiencia:0
  }

  constructor(private servicioEntrenador:EntrenadorService, private rutaActiva:ActivatedRoute){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioEntrenador.getEntrenadorById(id).subscribe({
      next:(data)=>{
        this.entrenador=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

}
