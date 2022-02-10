import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UsuarioadminModalComponent } from './usuarioadmin-modal/usuarioadmin-modal.component';

@Component({
  selector: 'app-usuarioadmin',
  templateUrl: './usuarioadmin.component.html', 
  styleUrls: ['./usuarioadmin.component.css']
})
export class UsuarioadminComponent implements OnInit {

  displayedColumns = ['idUsuario', 'nombreUsuario', 'nombre', 'apellido', 'correo','rol', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Usuario>

  constructor(
    
    private dialog: MatDialog,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.usuarioActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data); 
    })

    this.usuarioService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(usuario?: Usuario){
    let useradmin = usuario !=null ? usuario: new Usuario();
    this.dialog.open(UsuarioadminModalComponent,{
      width:'260px',
      data: useradmin
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.usuarioService.eliminar(id).subscribe(()=>{
        this.usuarioService.listar().subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
       })
     })
    }
  })
 }

 filtrar(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}