import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha05',
  templateUrl: './dominos-cozinha05.page.html',
  styleUrls: ['./dominos-cozinha05.page.scss'],
})
export class DominosCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showDominosCozinha04() {
    this.navCtrl.navigateForward('dominos-cozinha04');
  }

  showDominosCozinha06() {
    this.navCtrl.navigateForward('dominos-cozinha06');
  }
}
