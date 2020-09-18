import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha01',
  templateUrl: './jonny-rockets-cozinha01.page.html',
  styleUrls: ['./jonny-rockets-cozinha01.page.scss'],
})
export class JonnyRocketsCozinha01Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha06() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha06');
  }
  
  showJonnyRocketsCozinha02() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha02');
  }

}
