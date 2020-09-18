import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha06',
  templateUrl: './jonny-rockets-cozinha06.page.html',
  styleUrls: ['./jonny-rockets-cozinha06.page.scss'],
})
export class JonnyRocketsCozinha06Page implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha05() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha05');
  }
  
  showJonnyRocketsCozinha01() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha01');
  }

}
