import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit { 

  categoria!: Categoria;
  

  constructor(
    private dialogRef: MatDialogRef<CategoriaModalComponent>,
    private categoriaService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) private data: Categoria) { }

  ngOnInit(): void {
    this.categoria = new Categoria();
    this.categoria.idCategoria=this.data.idCategoria;
    this.categoria.nombreCategoria=this.data.nombreCategoria;
  
  }

  aceptar(){
    if(this.categoria !=null && this.categoria.idCategoria >0) {
    this.categoriaService.editar(this.categoria).subscribe(()=>{
      return this.categoriaService.listar().subscribe(data=>{
        this.categoriaService.categoriaActualizar.next(data);
      })
    })
  }else{
    this.categoriaService.registrar(this.categoria).subscribe(()=>{ 
      this.categoriaService.listar().subscribe(data =>{
        this.categoriaService.categoriaActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}

