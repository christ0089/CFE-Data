import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  permisssions = [
    {
      role: 'Acceso a Turbina',
      status: 'Autorizado',
      color: "green"
    },
    {
      role: 'Activacion de Turbina',
      status: 'Negado',
      color: "red"
    },
    {
      role: 'Acceso a Control de Mando',
      status: 'Pendiente',
      color: "gray"
    },
  ];
  constructor() {}
}
