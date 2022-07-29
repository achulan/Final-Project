import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importamos el modulo de routing
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { UsuarioPrincipalComponent } from './usuario-comp/usuario-principal/usuario-principal.component';
import { LoginComponent } from './login-comp/login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { EuroObjetivoComponent } from './objetivo-comp/euro-objetivo/euro-objetivo.component';
import { PesoObjetivoComponent } from './objetivo-comp/peso-objetivo/peso-objetivo.component';
import { VentasMesComponent } from './objetivo-comp/ventas-mes/ventas-mes.component';
import { VentasAnualComponent } from './objetivo-comp/ventas-anual/ventas-anual.component';
import { FaltaObjetivoComponent } from './objetivo-comp/falta-objetivo/falta-objetivo.component';
import { ObjetivoComponent } from './objetivo-comp/objetivo.component';
import { ContactosCompComponent } from './contactos-comp/contactos-comp.component';
import { ImagenHomeMovComponent } from './home-comp/imagen-home-mov/imagen-home-mov.component';
import { ImagenContactosComponent } from './home-comp/imagen-contactos/imagen-contactos.component';
import { NuevoContactoFormComponent } from './contactos-comp/nuevo-contacto-form/nuevo-contacto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioPrincipalComponent,
    LoginComponent,
    ToolbarComponent,
    EuroObjetivoComponent,
    PesoObjetivoComponent,
    VentasMesComponent,
    VentasAnualComponent,
    FaltaObjetivoComponent,
    ObjetivoComponent,
    ContactosCompComponent,
    HomeCompComponent,
    ImagenHomeMovComponent,
    ImagenContactosComponent,
    NuevoContactoFormComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
