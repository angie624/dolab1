import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DirectorService } from 'src/app/service/director.service';

@Component({
  selector: 'app-usuarioadmin-modal',
  templateUrl: './usuarioadmin-modal.component.html',
  styleUrls: ['./usuarioadmin-modal.component.css']
})
export class UsuarioadminModalComponent implements OnInit  {

  usuario!: Usuario;
 

  constructor(
    private dialogRef: MatDialogRef<UsuarioadminModalComponent>,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) private data: Usuario) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuario.idUsuario=this.data.idUsuario;
    this.usuario.nombreUsuario=this.data.nombreUsuario;
    this.usuario.clave=this.data.clave;
    this.usuario.nombre=this.data.nombre;
    this.usuario.apellido=this.data.apellido;
    this.usuario.correo=this.data.correo;
    this.usuario.rol=this.data.rol;
  }

  aceptar(){
    if(this.usuario !=null && this.usuario.idUsuario >0) {
    this.usuarioService.editar(this.usuario).subscribe(()=>{
      return this.usuarioService.listar().subscribe(data=>{
        this.usuarioService.usuarioActualizar.next(data);
      })
    })
  }else{
    this.usuarioService.registrar(this.usuario).subscribe(()=>{ 
      this.usuarioService.listar().subscribe(data =>{
        this.usuarioService.usuarioActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}

