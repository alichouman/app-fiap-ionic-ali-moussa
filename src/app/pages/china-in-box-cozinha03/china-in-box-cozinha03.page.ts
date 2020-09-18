import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box-cozinha03',
  templateUrl: './china-in-box-cozinha03.page.html',
  styleUrls: ['./china-in-box-cozinha03.page.scss'],
})
export class ChinaInBoxCozinha03Page implements OnInit {

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

  showChinaInBoxCozinha04() {
    this.navCtrl.navigateForward('china-in-box-cozinha06');
  }

}
