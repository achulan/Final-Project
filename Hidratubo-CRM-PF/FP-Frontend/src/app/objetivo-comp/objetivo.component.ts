import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrls: ['./objetivo.component.css']
})
export class ObjetivoComponent implements OnInit {
  grafica: ChartItem | undefined;

  constructor() { }

  ngOnInit() {}

}
