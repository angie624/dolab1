import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Oferta } from 'src/app/model/oferta';
import { Pago } from 'src/app/model/pago';
import { OfertaService } from 'src/app/service/oferta.service';
import { PagoService } from 'src/app/service/pago.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-pago-modal',
  templateUrl: './pago-modal.component.html',
  styleUrls: ['./pago-modal.component.css']
})
export class PagoModalComponent implements OnInit { 

  pago!: Pago;
  oferta!: Oferta[];

  constructor(
    private dialogRef: MatDialogRef<PagoModalComponent>,
    private ofertaService: OfertaService,
    private pagoService: PagoService,
    @Inject(MAT_DIALOG_DATA) private data: Pago) { }

  ngOnInit(): void {
    this.pago = new Pago();
    this.pago.idPago=this.data.idPago;
    this.pago.cuenta=this.data.cuenta;
    this.pago.puntos=this.data.puntos;
    this.pago.fecha=this.data.fecha;
    this.pago.oferta=this.data.oferta;

    this.ofertaService.listar().subscribe(data =>{
      this.oferta=data;
    })
  }

  aceptar(){
    if(this.pago !=null && this.pago.idPago >0) {
    this.pagoService.editar(this.pago).subscribe(()=>{
      return this.pagoService.listar().subscribe(data=>{
        this.pagoService.pagoActualizar.next(data);
      })
    })
  }else{
    this.pagoService.registrar(this.pago).subscribe(()=>{ 
      this.pagoService.listar().subscribe(data =>{
        this.pagoService.pagoActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}

