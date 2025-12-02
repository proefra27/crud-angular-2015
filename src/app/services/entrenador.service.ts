import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador } from '../models/entrenador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntrenadorService {

  private apiUrl = "https://practica-viii-examen-ii-orm-y-jwt.onrender.com";

  constructor(private http:HttpClient) { }

  //Obtener todos lo entrenadores
  getEntrenadores():Observable<Entrenador[]>{
    return this.http.get<Entrenador[]>(this.apiUrl+"/api/entrenadores");
  }
  //Obtener un entrenador por ID
  getEntrenadorById(id:any):Observable<Entrenador>{
    return this.http.get<Entrenador>(this.apiUrl+"/api/entrenadores/"+id);
  }
  //Actualizar un entrenador
  updateEntrenador(id:any,entrenador:Entrenador):Observable<Entrenador>{
    return this.http.put<Entrenador>(this.apiUrl+"/api/entrenadores/"+id,entrenador);
  }
  //Eliminar un entrenador
  deleteEntrenador(id:any):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/api/entrenadores/"+id);
  }

  //Agregar un entrenador
  addEntrenador(entrenador:Entrenador):Observable<Entrenador>{
    return this.http.post<Entrenador>("/api/entrenadores",entrenador);
  }
}
