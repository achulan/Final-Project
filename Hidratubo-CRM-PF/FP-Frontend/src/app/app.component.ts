import { Component } from '@angular/core';
import { primitiva } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'FP-Frontend';
  public config;

  constructor() {
    this.config = primitiva; 
  }
}
