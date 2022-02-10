import { Usuario } from "./usuario";

export class Oferta {
  
    idOferta!: number;
    descripcion!: string;
    nombreOferta!: string;
    precio!: string;
    usuario!: Usuario;
    fechaVencimiento!: string;
}