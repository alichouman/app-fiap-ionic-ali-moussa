import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king',
  templateUrl: './burger-king.page.html',
  styleUrls: ['./burger-king.page.scss'],
})
export class BurgerKingPage implements OnInit {
  
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPageBurgerKingCozinha01(){
    this.navCtrl.navigateForward('burger-king-cozinha01');
  }
  showPageBurgerKingCozinha02(){
    this.navCtrl.navigateForward('burger-king-cozinha02');
  }
  showPageBurgerKingCozinha03(){
    this.navCtrl.navigateForward('burger-king-cozinha03');
  }
  showPageBurgerKingCozinha04(){
    this.navCtrl.navigateForward('burger-king-cozinha04');
  }
  showPageBurgerKingCozinha05(){
    this.navCtrl.navigateForward('burger-king-cozinha05');
  }
  showPageBurgerKingCozinha06(){
    this.navCtrl.navigateForward('burger-king-cozinha06');
  }

}
