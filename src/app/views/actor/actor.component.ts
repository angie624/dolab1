import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';
import { ActorModalComponent } from './actor-modal/actor-modal.component';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  displayedColumns = ['idActor', 'nombreActor', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Actor>

  constructor(
    
    private dialog: MatDialog,
    private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.actorActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.actorService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(actor?: Actor){
    let act = actor !=null ? actor: new Actor();
    this.dialog.open(ActorModalComponent,{
      width:'260px',
      data: act
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.actorService.eliminar(id).subscribe(()=>{
        this.actorService.listar().subscribe(data => {
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

