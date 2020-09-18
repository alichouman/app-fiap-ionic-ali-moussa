import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha03',
  templateUrl: './dominos-cozinha03.page.html',
  styleUrls: ['./dominos-cozinha03.page.scss'],
})
export class DominosCozinha03Page implements OnInit {


  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showDominosCozinha02() {
    this.navCtrl.navigateForward('dominos-cozinha02');
  }

  showDominosCozinha04() {
    this.navCtrl.navigateForward('dominos-cozinha04');
  }
}
