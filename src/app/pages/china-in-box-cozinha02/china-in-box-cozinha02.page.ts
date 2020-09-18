import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha02',
  templateUrl: './china-in-box-cozinha02.page.html',
  styleUrls: ['./china-in-box-cozinha02.page.scss'],
})
export class ChinaInBoxCozinha02Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }

  showChinaInBoxCozinha01() {
    this.navCtrl.navigateForward('china-in-box-cozinha01');
  }

  showChinaInBoxCozinha03() {
    this.navCtrl.navigateForward('china-in-box-cozinha03');
  }

}
