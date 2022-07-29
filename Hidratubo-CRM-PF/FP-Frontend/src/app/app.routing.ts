// Importar modulos de routing de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

// Ahora debemos importar los componentes que vamos a usar en el routing
import { HomeCompComponent } from "./home-comp/home-comp.component";
import { UsuarioPrincipalComponent } from "./usuario-comp/usuario-principal/usuario-principal.component";
import { LoginComponent } from "./login-comp/login/login.component";
import { ObjetivoComponent } from "./objetivo-comp/objetivo.component";
import { ContactosCompComponent } from './contactos-comp/contactos-comp.component';
import { NuevoContactoFormComponent } from "./contactos-comp/nuevo-contacto-form/nuevo-contacto-form.component";


// Array de rutas
const appRoutes: Routes = [
    { path: "", component: HomeCompComponent },
    { path: "usuario-principal", component: UsuarioPrincipalComponent },
    { path: "login", component: LoginComponent },
    { path: "objetivo", component: ObjetivoComponent },
    { path: "contactos", component: ContactosCompComponent },
    { path: "nuevocontactoform", component: NuevoContactoFormComponent },
    { path: "**", component: HomeCompComponent } //ruta por defecto 404 
];

// Exportar el modulo de routing
export const appRoutingProviders: any[] = []; //servicio de routing interno
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
// Ahora debermos importar el modulo de routing en el app.module.ts
// Agregar routeroutlet en el app.component.html