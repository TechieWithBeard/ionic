import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})

export class ReservationPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
