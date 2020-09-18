import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habibs',
  templateUrl: './habibs.page.html',
  styleUrls: ['./habibs.page.scss'],
})
export class HabibsPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPageHabibsCozinha01(){
    this.navCtrl.navigateForward('habibs-cozinha01');
  }
  showPageHabibsCozinha02(){
    this.navCtrl.navigateForward('habibs-cozinha02');
  }
  showPageHabibsCozinha03(){
    this.navCtrl.navigateForward('habibs-cozinha03');
  }
  showPageHabibsCozinha04(){
    this.navCtrl.navigateForward('habibs-cozinha04');
  }
  showPageHabibsCozinha05(){
    this.navCtrl.navigateForward('habibs-cozinha05');
  }
  showPageHabibsCozinha06(){
    this.navCtrl.navigateForward('habibs-cozinha06');
  }
}