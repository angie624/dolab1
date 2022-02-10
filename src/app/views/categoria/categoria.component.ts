import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CategoriaModalComponent } from './categoria-modal/categoria-modal.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  displayedColumns = ['idCategoria', 'nombreCategoria', 'editar-eliminar'];
  dataSource!: MatTableDataSource<Categoria>

  constructor(
    
    private dialog: MatDialog,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.categoriaActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.categoriaService.listar().subscribe(data =>  { 
        this.dataSource = new MatTableDataSource(data);
    } );

  }

  openModal(categoria?: Categoria){
    let cat = categoria !=null ? categoria: new Categoria();
    this.dialog.open(CategoriaModalComponent,{
      width:'260px',
      data: cat
    })
  }

  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
      this.categoriaService.eliminar(id).subscribe(()=>{
        this.categoriaService.listar().subscribe(data => {
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

