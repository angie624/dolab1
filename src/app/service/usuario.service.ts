import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root' 
})
export class UsuarioService {
 
  usuarioActualizar = new Subject<Usuario[]>();

  private url: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(usuario: Usuario){
    return this.http.put(this.url, usuario)
  }
  
  registrar(usuario: Usuario){
    return this.http.post(this.url, usuario)
  }
}
