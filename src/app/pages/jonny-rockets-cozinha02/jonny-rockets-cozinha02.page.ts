import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jonny-rockets-cozinha02',
  templateUrl: './jonny-rockets-cozinha02.page.html',
  styleUrls: ['./jonny-rockets-cozinha02.page.scss'],
})
export class JonnyRocketsCozinha02Page implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showJonnyRocketsCozinha01() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha01');
  }
  
  showJonnyRocketsCozinha03() {
    this.navCtrl.navigateForward('jonny-rockets-cozinha03');
  }


}
