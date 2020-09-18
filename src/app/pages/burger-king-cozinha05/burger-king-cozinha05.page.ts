import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha05',
  templateUrl: './burger-king-cozinha05.page.html',
  styleUrls: ['./burger-king-cozinha05.page.scss'],
})
export class BurgerKingCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing(){
    this.navCtrl.navigateForward('burger-king');
  }


  showBurgerKingCozinha04() {
    this.navCtrl.navigateForward('burger-king-cozinha04');
  }

  showBurgerKingCozinha06() {
    this.navCtrl.navigateForward('burger-king-cozinha06');
  }
  
}
