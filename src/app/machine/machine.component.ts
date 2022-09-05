import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit {
  machine_data = {
    name: 'Turbina 2',
    date: new Date(Date.now()),
    operador: 'Christian Alvarez',
  };
  constructor(private navController: NavController) {}

  ngOnInit() {}

  open(route: string) {
    this.navController.navigateForward(route);
  }
}
