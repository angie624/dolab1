import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Director } from 'src/app/model/director';
import { DirectorService } from 'src/app/service/director.service';
import { DirectorModalComponent } from './director-modal/director-modal.component';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  displayedColumns = ['idDirector', 'nombreDirector', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Director>

  constructor(
    
    private dialog: MatDialog,
    private directorService: DirectorService) { }

  ngOnInit(): void {
    this.directorService.directorActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.directorService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(director?: Director){
    let dir = director !=null ? director: new Director();
    this.dialog.open(DirectorModalComponent,{
      width:'260px',
      data: dir
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.directorService.eliminar(id).subscribe(()=>{
        this.directorService.listar().subscribe(data => {
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


