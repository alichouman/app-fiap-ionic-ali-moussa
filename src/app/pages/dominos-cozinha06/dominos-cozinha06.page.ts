import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha06',
  templateUrl: './dominos-cozinha06.page.html',
  styleUrls: ['./dominos-cozinha06.page.scss'],
})
export class DominosCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showDominosCozinha05() {
    this.navCtrl.navigateForward('dominos-cozinha05');
  }

  showDominosCozinha01() {
    this.navCtrl.navigateForward('dominos-cozinha01');
  }

}
