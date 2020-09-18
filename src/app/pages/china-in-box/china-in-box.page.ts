import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-china-in-box',
  templateUrl: './china-in-box.page.html',
  styleUrls: ['./china-in-box.page.scss'],
})
export class ChinaInBoxPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageChinaInBoxCozinha01() {
    this.navCtrl.navigateForward('china-in-box-cozinha01');
  }

  showPageChinaInBoxCozinha02() {
    this.navCtrl.navigateForward('china-in-box-cozinha02');
  }

  showPageChinaInBoxCozinha03() {
    this.navCtrl.navigateForward('china-in-box-cozinha03');
  }

  showPageChinaInBoxCozinha04() {
    this.navCtrl.navigateForward('china-in-box-cozinha04');
  }
  showPageChinaInBoxCozinha05() {
    this.navCtrl.navigateForward('china-in-box-cozinha05');
  }
  showPageChinaInBoxCozinha06() {
    this.navCtrl.navigateForward('china-in-box-cozinha06');
  }
}

