import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioModalComponent } from './usuario-modal/usuario-modal.component';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayedColumns = ['idUsuario', 'nombreUsuario', 'clave', 'nombre', 'apellido', 'correo', 'rol'];
  dataSource!: MatTableDataSource<Usuario>

  constructor(
    
    private dialog: MatDialog,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
   
    this.usuarioService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(usuario?: Usuario){
    let usu = usuario !=null ? usuario: new Usuario();
    this.dialog.open(UsuarioModalComponent,{
      width:'260px',
      data: usu
    })
  }


}