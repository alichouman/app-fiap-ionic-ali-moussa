import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha06',
  templateUrl: './habibs-cozinha06.page.html',
  styleUrls: ['./habibs-cozinha06.page.scss'],
})
export class HabibsCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha05() {
    this.navCtrl.navigateForward('habibs-cozinha05');
  }
  
  showHabibsCozinha01() {
    this.navCtrl.navigateForward('habibs-cozinha01');
  }

}
