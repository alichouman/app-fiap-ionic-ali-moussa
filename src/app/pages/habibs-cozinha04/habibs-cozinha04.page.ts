import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha04',
  templateUrl: './habibs-cozinha04.page.html',
  styleUrls: ['./habibs-cozinha04.page.scss'],
})
export class HabibsCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha03() {
    this.navCtrl.navigateForward('habibs-cozinha03');
  }
  
  showHabibsCozinha05() {
    this.navCtrl.navigateForward('habibs-cozinha05');
  }

}
