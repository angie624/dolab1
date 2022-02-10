import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { InfoComponent } from './views/info/info.component';
import { LoginComponent } from './views/login/login.component';
import { PeliculaadminComponent } from "./views/peliculaadmin/peliculaadmin.component";
import { OfertaComponent } from "./views/oferta/oferta.component";
import { PeliculaComponent } from "./views/pelicula/pelicula.component";
import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioadminComponent } from './views/usuarioadmin/usuarioadmin.component';
import { ActorComponent } from './views/actor/actor.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { DirectorComponent } from './views/director/director.component';
import { OfertausuComponent } from './views/ofertausu/ofertausu.component';
import { SuscriptorComponent } from './views/suscriptor/suscriptor.component';
import { PelisuscripComponent } from './views/pelisuscrip/pelisuscrip.component';
import { CineComponent } from './views/cine/cine.component';
import { PelicineComponent } from './views/pelicine/pelicine.component';
import { OfertacineComponent } from './views/ofertacine/ofertacine.component';
import { PagoComponent } from './views/pago/pago.component';
import { PeliadminComponent } from './views/peliadmin/peliadmin.component';
import { CinesuscripComponent } from './views/cinesuscrip/cinesuscrip.component';

const app_routes: Routes = [
    { path: 'oferta', component: OfertaComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'administrador', component: AdministradorComponent },
    { path: 'info', component: InfoComponent },
    { path: 'padmin', component: PeliculaadminComponent },
    { path: 'usuadmin', component: UsuarioadminComponent },
    { path: 'actor', component: ActorComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'director', component: DirectorComponent },
    { path: 'ofertausu', component: OfertausuComponent },
    { path: 'suscriptor', component: SuscriptorComponent },
    { path: 'pelisuscrip', component: PelisuscripComponent },
    { path: 'cine', component: CineComponent },
    { path: 'pelicine', component: PelicineComponent },
    { path: 'ofertacine', component: OfertacineComponent },
    { path: 'pagoof', component: PagoComponent },
    { path: 'peliadmin', component: PeliadminComponent },
    { path: 'cinesus', component: CinesuscripComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);