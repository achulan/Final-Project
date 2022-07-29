import { Component } from '@angular/core';

@Component({
  selector: 'usuario-principal',
  templateUrl: './usuario-principal.component.html',
  styleUrls: ['./usuario-principal.component.css']
})
export class UsuarioPrincipalComponent {
  public title = 'Usuario Principal';

  constructor() { 
    console.log('UsuarioPrincipalComponent');
  }
}
