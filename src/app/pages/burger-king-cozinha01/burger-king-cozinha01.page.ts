import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha01',
  templateUrl: './burger-king-cozinha01.page.html',
  styleUrls: ['./burger-king-cozinha01.page.scss'],
})
export class BurgerKingCozinha01Page implements OnInit {

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

  showBurgerKingCozinha06() {
    this.navCtrl.navigateForward('burger-king-cozinha06');
  }



}
