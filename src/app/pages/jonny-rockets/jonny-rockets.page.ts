import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets',
  templateUrl: './jonny-rockets.page.html',
  styleUrls: ['./jonny-rockets.page.scss'],
})
export class JonnyRocketsPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPageJonnyRocketsCozinha01(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha01');
  }
  showPageJonnyRocketsCozinha02(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha02');
  }
  showPageJonnyRocketsCozinha03(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha03');
  }
  showPageJonnyRocketsCozinha04(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha04');
  }
  showPageJonnyRocketsCozinha05(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha05');
  }
  showPageJonnyRocketsCozinha06(){
    this.navCtrl.navigateForward('jonny-rockets-cozinha06');
  }
}