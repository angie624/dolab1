import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { OfertaComponent } from './views/oferta/oferta.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './views/oferta/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OfertaModalComponent } from './views/oferta/oferta-modal/oferta-modal.component';
import { PeliculaModalComponent } from './views/pelicula/pelicula-modal/pelicula-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//rutas
import { app_routing } from "./app.routes";
import { PeliculaComponent } from './views/pelicula/pelicula.component';
import { UsuarioModalComponent } from './views/usuario/usuario-modal/usuario-modal.component';
import { SuscriptorComponent } from './views/suscriptor/suscriptor.component';
import { CineComponent } from './views/cine/cine.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { LoginComponent } from './views/login/login.component';
import { EncabezadoComponent } from './views/encabezado/encabezado.component';
import { FooterComponent } from './views/footer/footer.component';
import { InfoComponent } from './views/info/info.component';
import { PeliculaadminComponent } from './views/peliculaadmin/peliculaadmin.component';
import { PeliculaadminModalComponent } from './views/peliculaadmin/peliculaadmin-modal/peliculaadmin-modal.component';
import { UsuarioadminComponent } from './views/usuarioadmin/usuarioadmin.component';
import { UsuarioadminModalComponent } from './views/usuarioadmin/usuarioadmin-modal/usuarioadmin-modal.component';
import { ActorComponent } from './views/actor/actor.component';
import { ActorModalComponent } from './views/actor/actor-modal/actor-modal.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { CategoriaModalComponent } from './views/categoria/categoria-modal/categoria-modal.component';
import { DirectorComponent } from './views/director/director.component';
import { DirectorModalComponent } from './views/director/director-modal/director-modal.component';
import { OfertausuComponent } from './views/ofertausu/ofertausu.component';
import { PelisuscripComponent } from './views/pelisuscrip/pelisuscrip.component';
import { PelicineComponent } from './views/pelicine/pelicine.component';
import { PelicineModalComponent } from './views/pelicine/pelicine-modal/pelicine-modal.component';
import { OfertacineComponent } from './views/ofertacine/ofertacine.component';
import { PagoComponent } from './views/pago/pago.component';
import { PagoModalComponent } from './views/pago/pago-modal/pago-modal.component';
import { PeliadminComponent } from './views/peliadmin/peliadmin.component';
import { CinesuscripComponent } from './views/cinesuscrip/cinesuscrip.component';
import { CinesuscripModalComponent } from './views/cinesuscrip/cinesuscrip-modal/cinesuscrip-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    OfertaComponent,
    ConfirmDialogComponent,
    OfertaModalComponent,
    PeliculaComponent,
    PeliculaModalComponent,
    UsuarioModalComponent,
    LoginComponent,
    SuscriptorComponent,
    CineComponent,
    AdministradorComponent,
    EncabezadoComponent,
    FooterComponent,
    InfoComponent,
    PeliculaadminComponent,
    PeliculaadminModalComponent,
    UsuarioadminComponent,
    UsuarioadminModalComponent,
    ActorComponent,
    ActorModalComponent,
    CategoriaComponent,
    CategoriaModalComponent,
    DirectorComponent,
    DirectorModalComponent,
    OfertausuComponent,
    PelisuscripComponent,
    PelicineComponent,
    PelicineModalComponent,
    OfertacineComponent,
    PagoComponent,
    PagoModalComponent,
    ConfirmDialogComponent,
    PeliadminComponent,
    CinesuscripComponent,
    CinesuscripModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    NgbModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
