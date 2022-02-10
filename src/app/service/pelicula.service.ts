import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculaActualizar = new Subject<Pelicula[]>();

  private url: string = 'http://localhost:8080/pelicula';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pelicula[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(pelicula: Pelicula){
    return this.http.put(this.url, pelicula)
  }

  registrar(pelicula: Pelicula){
    return this.http.put(this.url, pelicula)
  }
}
