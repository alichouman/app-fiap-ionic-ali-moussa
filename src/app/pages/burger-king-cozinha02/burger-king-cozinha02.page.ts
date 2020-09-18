import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-king-cozinha02',
  templateUrl: './burger-king-cozinha02.page.html',
  styleUrls: ['./burger-king-cozinha02.page.scss'],
})
export class BurgerKingCozinha02Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing() {
    this.navCtrl.navigateForward('burger-king');
  }

  showBurgerKingCozinha01() {
    this.navCtrl.navigateForward('burger-king-cozinha01');
  }
  
  showBurgerKingCozinha03() {
    this.navCtrl.navigateForward('burger-king-cozinha03');
  }


}
