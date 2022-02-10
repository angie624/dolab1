import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PelicineModalComponent } from './pelicine-modal/pelicine-modal.component';

@Component({
  selector: 'app-pelicine',
  templateUrl: './pelicine.component.html',
  styleUrls: ['./pelicine.component.css']
})
export class PelicineComponent implements OnInit {

  displayedColumns = ['idPelicula', 'titulo', 'categoria', 'descripcion', 'fecha', 'director','actor', 'estado', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Pelicula>

  constructor(
    
    private dialog: MatDialog,
    private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.peliculaActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.peliculaService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(pelicula?: Pelicula){
    let peli = pelicula !=null ? pelicula: new Pelicula();
    this.dialog.open(PelicineModalComponent,{
      width:'260px',
      data: peli
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.peliculaService.eliminar(id).subscribe(()=>{
        this.peliculaService.listar().subscribe(data => {
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

