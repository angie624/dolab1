import { Oferta } from "./oferta";

export class Pago {
  
    idPago!: number;
    cuenta!: string;
    puntos!: string;
    fecha!: string;
    oferta!: Oferta;
}