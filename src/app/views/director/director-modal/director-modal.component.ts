import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Director } from 'src/app/model/director';
import { DirectorService } from 'src/app/service/director.service';


@Component({
  selector: 'app-director-modal',
  templateUrl: './director-modal.component.html',
  styleUrls: ['./director-modal.component.css']
})
export class DirectorModalComponent implements OnInit  { 

  director!: Director;
  

  constructor(
    private dialogRef: MatDialogRef<DirectorModalComponent>,
    private directorService: DirectorService,
    @Inject(MAT_DIALOG_DATA) private data: Director) { }

  ngOnInit(): void {
    this.director = new Director();
    this.director.idDirector=this.data.idDirector;
    this.director.nombreDirector=this.data.nombreDirector;
  
  }

  aceptar(){
    if(this.director !=null && this.director.idDirector >0) {
    this.directorService.editar(this.director).subscribe(()=>{
      return this.directorService.listar().subscribe(data=>{
        this.directorService.directorActualizar.next(data);
      })
    })
  }else{
    this.directorService.registrar(this.director).subscribe(()=>{ 
      this.directorService.listar().subscribe(data =>{
        this.directorService.directorActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}

