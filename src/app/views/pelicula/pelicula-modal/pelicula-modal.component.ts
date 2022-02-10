import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actor } from 'src/app/model/actor';
import { Categoria } from 'src/app/model/categoria';
import { Director } from 'src/app/model/director';
import { Pelicula } from 'src/app/model/pelicula';
import { Usuario } from 'src/app/model/usuario';
import { ActorService } from 'src/app/service/actor.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PeliculaService } from 'src/app/service/pelicula.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DirectorService } from 'src/app/service/director.service';

@Component({
  selector: 'app-pelicula-modal',
  templateUrl: './pelicula-modal.component.html',
  styleUrls: ['./pelicula-modal.component.css']
})
export class PeliculaModalComponent implements OnInit {

  pelicula!: Pelicula;
  usuario!: Usuario[];
  actor!: Actor[];
  director!: Director[];
  categoria!: Categoria[];

  constructor(
    private dialogRef: MatDialogRef<PeliculaModalComponent>,
    private peliculaService: PeliculaService,
    private usuarioService: UsuarioService,
    private actorService: ActorService,
    private categoriaService: CategoriaService,
    private directorService: DirectorService,
    @Inject(MAT_DIALOG_DATA) private data: Pelicula) { }

  ngOnInit(): void {
    this.pelicula = new Pelicula();
    this.pelicula.idPelicula=this.data.idPelicula;
    this.pelicula.titulo=this.data.titulo;
    this.pelicula.categoria=this.data.categoria;
    this.pelicula.descripcion=this.data.descripcion;
    this.pelicula.fecha=this.data.fecha;
    this.pelicula.director=this.data.director;
    this.pelicula.actor=this.data.actor;
    this.pelicula.usuario=this.data.usuario;

    this.categoriaService.listar().subscribe(data =>{
      this.categoria=data;
    })
      this.actorService.listar().subscribe(data =>{
        this.actor=data;
      })
      this.usuarioService.listar().subscribe(data =>{
        this.usuario=data;
      })
       this.directorService.listar().subscribe(data =>{
           this.director=data;
       })
  }

  aceptar(){
    if(this.pelicula !=null && this.pelicula.idPelicula >0) {
    this.peliculaService.editar(this.pelicula).subscribe(()=>{
      return this.peliculaService.listar().subscribe(data=>{
        this.peliculaService.peliculaActualizar.next(data);
      })
    })
  }else{
    this.peliculaService.registrar(this.pelicula).subscribe(()=>{ 
      this.peliculaService.listar().subscribe(data =>{
        this.peliculaService.peliculaActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}
