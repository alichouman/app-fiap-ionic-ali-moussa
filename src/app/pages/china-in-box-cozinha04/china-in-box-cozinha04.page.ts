import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha04',
  templateUrl: './china-in-box-cozinha04.page.html',
  styleUrls: ['./china-in-box-cozinha04.page.scss'],
})
export class ChinaInBoxCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }

  showChinaInBoxCozinha03() {
    this.navCtrl.navigateForward('china-in-box-cozinha03');
  }

  showChinaInBoxCozinha05() {
    this.navCtrl.navigateForward('china-in-box-cozinha05');
  }


}
