import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha02',
  templateUrl: './dominos-cozinha02.page.html',
  styleUrls: ['./dominos-cozinha02.page.scss'],
})
export class DominosCozinha02Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showDominosCozinha01() {
    this.navCtrl.navigateForward('dominos-cozinha01');
  }

  showDominosCozinha03() {
    this.navCtrl.navigateForward('dominos-cozinha03');
  }
}
