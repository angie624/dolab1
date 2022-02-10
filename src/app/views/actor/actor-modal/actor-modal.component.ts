import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';


@Component({
  selector: 'app-actor-modal',
  templateUrl: './actor-modal.component.html',
  styleUrls: ['./actor-modal.component.css']
})
export class ActorModalComponent implements OnInit { 

  actor!: Actor;
  

  constructor(
    private dialogRef: MatDialogRef<ActorModalComponent>,
    private actorService: ActorService,
    @Inject(MAT_DIALOG_DATA) private data: Actor) { }

  ngOnInit(): void {
    this.actor = new Actor();
    this.actor.idActor=this.data.idActor;
    this.actor.nombreActor=this.data.nombreActor;
  
  }

  aceptar(){
    if(this.actor !=null && this.actor.idActor >0) {
    this.actorService.editar(this.actor).subscribe(()=>{
      return this.actorService.listar().subscribe(data=>{
        this.actorService.actorActualizar.next(data);
      })
    })
  }else{
    this.actorService.registrar(this.actor).subscribe(()=>{ 
      this.actorService.listar().subscribe(data =>{
        this.actorService.actorActualizar.next(data);
      })
    })
  }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }


}
