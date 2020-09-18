import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha05',
  templateUrl: './habibs-cozinha05.page.html',
  styleUrls: ['./habibs-cozinha05.page.scss'],
})
export class HabibsCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha04() {
    this.navCtrl.navigateForward('habibs-cozinha04');
  }
  
  showHabibsCozinha06() {
    this.navCtrl.navigateForward('habibs-cozinha06');
  }

}
