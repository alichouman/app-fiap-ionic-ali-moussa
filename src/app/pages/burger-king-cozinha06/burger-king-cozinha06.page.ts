import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha06',
  templateUrl: './burger-king-cozinha06.page.html',
  styleUrls: ['./burger-king-cozinha06.page.scss'],
})
export class BurgerKingCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing(){
    this.navCtrl.navigateForward('burger-king');
  }


  showBurgerKingCozinha05() {
    this.navCtrl.navigateForward('burger-king-cozinha05');
  }

  showBurgerKingCozinha01() {
    this.navCtrl.navigateForward('burger-king-cozinha01');
  }
  
}
