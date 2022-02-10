import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreUsuario!: string;
  clave!: string;

  constructor() { }

  ngOnInit(): void {
  }

  logInSuscrip() {
    if(this.nombreUsuario == "fernanda01" && this.clave == "fer123"){
      console.log("bienvenido suscriptor")
    }
    else{
      console.log("datos incorrectos")
    }
  }

  logInAdmin() {
    if(this.nombreUsuario == "david01" && this.clave == "david12"){
      console.log("bienvenido administrador")
    }
    else{
      console.log("datos incorrectos")
    }
  }

  logInCine() {
    if(this.nombreUsuario == "cine_col" && this.clave == "cines4"){
      console.log("bienvenido cine")
    }
    else{
      console.log("datos incorrectos")
    }
  }

}
