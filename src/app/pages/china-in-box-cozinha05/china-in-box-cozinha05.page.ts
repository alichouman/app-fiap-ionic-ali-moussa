import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha05',
  templateUrl: './china-in-box-cozinha05.page.html',
  styleUrls: ['./china-in-box-cozinha05.page.scss'],
})
export class ChinaInBoxCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }

  showChinaInBoxCozinha04() {
    this.navCtrl.navigateForward('china-in-box-cozinha04');
  }

  showChinaInBoxCozinha06() {
    this.navCtrl.navigateForward('china-in-box-cozinha06');
  }


}
