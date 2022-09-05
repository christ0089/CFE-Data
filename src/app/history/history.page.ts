import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history = [
    {
      name: 'Verificacion de Eficiencia',
      date: '11/07/2022',
      result: 'Aceptado',
      color: 'green',
    },
    {
      name: 'Remplazo de Pieza',
      date: '11/06/2022',
      result: 'Denegado',
      color: 'red',
    },
    {
      name: 'Verificacion de Eficiencia',
      date: '01/06/2022',
      result: 'Aceptado',
      color: 'green',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
