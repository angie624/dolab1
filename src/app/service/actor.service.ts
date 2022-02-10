import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Actor } from '../model/actor';

@Injectable({
  providedIn: 'root'
}) 
export class ActorService {

  actorActualizar = new Subject<Actor[]>();


  private url: string = 'http://localhost:8080/actor';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Actor[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(actor: Actor){
    return this.http.put(this.url, actor)
  }

  registrar(actor: Actor){
    return this.http.put(this.url, actor)
  }
}
