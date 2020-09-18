import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha04',
  templateUrl: './jonny-rockets-cozinha04.page.html',
  styleUrls: ['./jonny-rockets-cozinha04.page.scss'],
})
export class JonnyRocketsCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha03() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha03');
  }
  
  showJonnyRocketsCozinha05() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha05');
  }


}
