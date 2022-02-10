import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css']
})
export class UsuarioModalComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private dialogRef: MatDialogRef<UsuarioModalComponent>,
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
    this.usuarioService.registrar(this.usuario).subscribe(()=>{ 
      this.usuarioService.listar().subscribe(data =>{
        this.usuarioService.usuarioActualizar.next(data);
      })
    })
  this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}