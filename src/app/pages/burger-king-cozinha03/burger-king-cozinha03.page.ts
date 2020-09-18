import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha03',
  templateUrl: './burger-king-cozinha03.page.html',
  styleUrls: ['./burger-king-cozinha03.page.scss'],
})
export class BurgerKingCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing(){
    this.navCtrl.navigateForward('burger-king');
  }


  showBurgerKingCozinha02() {
    this.navCtrl.navigateForward('burger-king-cozinha02');
  }

  showBurgerKingCozinha04() {
    this.navCtrl.navigateForward('burger-king-cozinha04');
  }
  
}