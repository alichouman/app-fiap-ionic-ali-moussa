import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha03',
  templateUrl: './habibs-cozinha03.page.html',
  styleUrls: ['./habibs-cozinha03.page.scss'],
})
export class HabibsCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha02() {
    this.navCtrl.navigateForward('habibs-cozinha02');
  }
  
  showHabibsCozinha04() {
    this.navCtrl.navigateForward('habibs-cozinha04');
  }

}
