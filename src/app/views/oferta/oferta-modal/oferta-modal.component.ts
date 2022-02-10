import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Oferta } from 'src/app/model/oferta';
import { Usuario } from 'src/app/model/usuario';
import { OfertaService } from 'src/app/service/oferta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-oferta-modal',
  templateUrl: './oferta-modal.component.html',
  styleUrls: ['./oferta-modal.component.css']
})
export class OfertaModalComponent implements OnInit { 

  oferta!: Oferta;
  usuario!: Usuario[];

  constructor(
    private dialogRef: MatDialogRef<OfertaModalComponent>,
    private usuarioService: UsuarioService,
    private ofertaService: OfertaService,
    @Inject(MAT_DIALOG_DATA) private data: Oferta) { }

  ngOnInit(): void {
    this.oferta = new Oferta();
    this.oferta.idOferta=this.data.idOferta;
    this.oferta.nombreOferta=this.data.nombreOferta;
    this.oferta.descripcion=this.data.descripcion;
    this.oferta.precio=this.data.precio;
    this.oferta.fechaVencimiento=this.data.fechaVencimiento;
    this.oferta.usuario=this.data.usuario;

    this.usuarioService.listar().subscribe(data =>{
      this.usuario=data;
    })
  }

  aceptar(){
    if(this.oferta !=null && this.oferta.idOferta >0) {
    this.ofertaService.editar(this.oferta).subscribe(()=>{
      return this.ofertaService.listar().subscribe(data=>{
        this.ofertaService.ofertaActualizar.next(data);
      })
    })
  }else{
    this.ofertaService.registrar(this.oferta).subscribe(()=>{ 
      this.ofertaService.listar().subscribe(data =>{
        this.ofertaService.ofertaActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}
