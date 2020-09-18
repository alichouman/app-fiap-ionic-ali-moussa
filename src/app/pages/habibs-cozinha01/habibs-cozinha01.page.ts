import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs-cozinha01',
  templateUrl: './habibs-cozinha01.page.html',
  styleUrls: ['./habibs-cozinha01.page.scss'],
})
export class HabibsCozinha01Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showHabibsCozinha06() {
    this.navCtrl.navigateForward('habibs-cozinha06');
  }
  
  showHabibsCozinha02() {
    this.navCtrl.navigateForward('habibs-cozinha02');
  }

}
