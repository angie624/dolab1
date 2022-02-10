import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Pago } from 'src/app/model/pago';
import { PagoService } from 'src/app/service/pago.service';
import { PagoModalComponent } from './pago-modal/pago-modal.component';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  displayedColumns = ['idPago', 'cuenta', 'puntos', 'fecha', 'oferta', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Pago>

  constructor(
    
    private dialog: MatDialog,
    private pagoService: PagoService) { }

  ngOnInit(): void {
    this.pagoService.pagoActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.pagoService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(pago?: Pago){
    let pag = pago !=null ? pago: new Pago();
    this.dialog.open(PagoModalComponent,{
      width:'260px',
      data: pag
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.pagoService.eliminar(id).subscribe(()=>{
        this.pagoService.listar().subscribe(data => {
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

