import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha04',
  templateUrl: './burger-king-cozinha04.page.html',
  styleUrls: ['./burger-king-cozinha04.page.scss'],
})
export class BurgerKingCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing(){
    this.navCtrl.navigateForward('burger-king');
  }


  showBurgerKingCozinha03() {
    this.navCtrl.navigateForward('burger-king-cozinha03');
  }

  showBurgerKingCozinha05() {
    this.navCtrl.navigateForward('burger-king-cozinha05');
  }
  
}
