import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/service/oferta.service';
import { Oferta } from 'src/app/model/oferta';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { OfertaModalComponent } from './oferta-modal/oferta-modal.component';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  displayedColumns = ['idOferta', 'nombreOferta', 'descripcion', 'precio', 'fechaVencimiento', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Oferta>

  constructor(
    
    private dialog: MatDialog,
    private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.ofertaActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.ofertaService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(oferta?: Oferta){
    let ofer = oferta !=null ? oferta: new Oferta();
    this.dialog.open(OfertaModalComponent,{
      width:'260px',
      data: ofer
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.ofertaService.eliminar(id).subscribe(()=>{
        this.ofertaService.listar().subscribe(data => {
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
