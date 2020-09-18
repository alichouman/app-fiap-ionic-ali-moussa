import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha03',
  templateUrl: './jonny-rockets-cozinha03.page.html',
  styleUrls: ['./jonny-rockets-cozinha03.page.scss'],
})
export class JonnyRocketsCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha02() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha02');
  }
  
  showJonnyRocketsCozinha04() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha04');
  }


}
