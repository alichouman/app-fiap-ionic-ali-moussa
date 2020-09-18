import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dominos',
  templateUrl: './dominos.page.html',
  styleUrls: ['./dominos.page.scss'],
})
export class DominosPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPageDominosCozinha01(){
    this.navCtrl.navigateForward('dominos-cozinha01');
  }
  showPageDominosCozinha02(){
    this.navCtrl.navigateForward('dominos-cozinha02');
  }
  showPageDominosCozinha03(){
    this.navCtrl.navigateForward('dominos-cozinha03');
  }
  showPageDominosCozinha04(){
    this.navCtrl.navigateForward('dominos-cozinha04');
  }
  showPageDominosCozinha05(){
    this.navCtrl.navigateForward('dominos-cozinha05');
  }
  showPageDominosCozinha06(){
    this.navCtrl.navigateForward('dominos-cozinha06');
  }

}