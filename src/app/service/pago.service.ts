import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Pago } from '../model/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pagoActualizar = new Subject<Pago[]>();

  private url: string = 'http://localhost:8080/pago';

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Pago[]>(this.url);
  } 

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  } 

  editar(pago: Pago){
    return this.http.put(this.url, pago)
  }

  registrar(pago: Pago){
    return this.http.put(this.url, pago)
  }
}
