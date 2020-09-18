import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha02',
  templateUrl: './habibs-cozinha02.page.html',
  styleUrls: ['./habibs-cozinha02.page.scss'],
})
export class HabibsCozinha02Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha01() {
    this.navCtrl.navigateForward('habibs-cozinha01');
  }
  
  showHabibsCozinha03() {
    this.navCtrl.navigateForward('habibs-cozinha03');
  }
}
