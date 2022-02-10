import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../model/oferta';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  ofertaActualizar = new Subject<Oferta[]>();

  private url: string = 'http://localhost:8080/ofertas';

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Oferta[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(oferta: Oferta){
    return this.http.put(this.url, oferta)
  }

  registrar(oferta: Oferta){
    return this.http.put(this.url, oferta)
  }
}
