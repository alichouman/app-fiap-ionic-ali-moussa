import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha01',
  templateUrl: './china-in-box-cozinha01.page.html',
  styleUrls: ['./china-in-box-cozinha01.page.scss'],
})
export class ChinaInBoxCozinha01Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showChinaInBoxCozinha02() {
    this.navCtrl.navigateForward('china-in-box-cozinha02');
  }

  showChinaInBoxCozinha06() {
    this.navCtrl.navigateForward('china-in-box-cozinha06');
  }

}
