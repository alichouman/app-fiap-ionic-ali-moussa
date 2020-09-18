import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha05',
  templateUrl: './jonny-rockets-cozinha05.page.html',
  styleUrls: ['./jonny-rockets-cozinha05.page.scss'],
})
export class JonnyRocketsCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha04() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha04');
  }
  
  showJonnyRocketsCozinha06() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha06');
  }


}
