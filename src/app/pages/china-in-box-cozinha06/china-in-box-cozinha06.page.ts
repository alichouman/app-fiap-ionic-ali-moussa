import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha06',
  templateUrl: './china-in-box-cozinha06.page.html',
  styleUrls: ['./china-in-box-cozinha06.page.scss'],
})
export class ChinaInBoxCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }

  showChinaInBoxCozinha05() {
    this.navCtrl.navigateForward('china-in-box-cozinha05');
  }

  showChinaInBoxCozinha01() {
    this.navCtrl.navigateForward('china-in-box-cozinha01');
  }


}
