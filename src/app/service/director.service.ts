import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Director } from '../model/director';

@Injectable({
  providedIn: 'root'
}) 
export class DirectorService {

  directorActualizar = new Subject<Director[]>();


  private url: string = 'http://localhost:8080/director';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Director[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(director: Director){
    return this.http.put(this.url, director)
  }

  registrar(director: Director){
    return this.http.put(this.url, director)
  }
}

