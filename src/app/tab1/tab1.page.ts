import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
import {
  ModalController,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { MachineComponent } from '../machine/machine.component';

export interface Tag {
  tag_id: string;
  name: string;
  activity: string;
  priority: number;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  readerMode$;

  tareas: Tag[] = [
    {
      tag_id: 'turbine2',
      name: 'Turbina 2',
      activity: 'Checar Turbina 2',
      priority: 3,
    },
    {
      tag_id: 'valv3',
      name: 'Valvula 3',
      activity: 'Checar Valvula 3',
      priority: 2,
    },
    {
      tag_id: 'panel4',
      name: 'Panel 4',
      activity: 'Verificar numeros panel 4',
      priority: 2,
    },
  ];

  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    private navControler: NavController,
    private platform: Platform
  ) {}

  ngOnInit() {}

  async scanearData(tagData: Tag) {
    if (this.platform.is('ios') && !this.platform.is('mobileweb')) {
      let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
      this.readerMode$ = this.nfc.readerMode(flags).subscribe(
        (tag) => console.log(JSON.stringify(tag)),
        (err) => console.log('Error reading tag', err)
      );

      // Read NFC Tag - iOS
      // On iOS, a NFC reader session takes control from your app while scanning tags then returns a tag
      try {
        let tag = await this.nfc.scanNdef();
        console.log(
          JSON.stringify(
            this.ndef.textHelper.decodePayload(tag.ndefMessage[0].payload)
          )
        );

        const tagID = JSON.stringify(
          this.ndef.textHelper.decodePayload(tag.ndefMessage[0].payload)
        ).replace(/['"]+/g, '');
        if (tagID === tagData.tag_id) {
          this.navControler.navigateForward('machine');
        } else {
          alert('Tag Incorrecto');
        }
      } catch (err) {
        console.log('Error reading tag', err);
      }
    } else {
      this.navControler.navigateForward('machine');
    }
  }
}
