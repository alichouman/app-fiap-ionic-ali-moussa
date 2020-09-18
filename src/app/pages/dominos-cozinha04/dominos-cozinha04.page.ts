import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha04',
  templateUrl: './dominos-cozinha04.page.html',
  styleUrls: ['./dominos-cozinha04.page.scss'],
})
export class DominosCozinha04Page implements OnInit {


  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showDominosCozinha03() {
    this.navCtrl.navigateForward('dominos-cozinha03');
  }

  showDominosCozinha05() {
    this.navCtrl.navigateForward('dominos-cozinha05');
  }
}
