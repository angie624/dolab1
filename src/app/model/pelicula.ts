import { Actor } from "./actor";
import { Categoria } from "./categoria";
import { Director } from "./director";
import { Usuario } from "./usuario";

export class Pelicula {
    idPelicula!: number;
    descripcion!: string;
    fecha!: string;
    estado!: string;
    titulo!: string;
    usuario!: Usuario;
    categoria!: Categoria;
    director!: Director;
    actor!: Actor;
}