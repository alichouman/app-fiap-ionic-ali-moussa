import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos-cozinha01',
  templateUrl: './dominos-cozinha01.page.html',
  styleUrls: ['./dominos-cozinha01.page.scss'],
})
export class DominosCozinha01Page implements OnInit {

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

  showDominosCozinha06() {
    this.navCtrl.navigateForward('dominos-cozinha06');
  }

}
