import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha03',
  templateUrl: './pizza-hut-cozinha03.page.html',
  styleUrls: ['./pizza-hut-cozinha03.page.scss'],
})
export class PizzaHutCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePizzaHut(){
    this.navCtrl.navigateForward('pizza-hut');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPizzaHutCozinha04() {
    this.navCtrl.navigateForward('pizza-hut-cozinha04');
  }
  
  showPizzaHutCozinha02() {
    this.navCtrl.navigateForward('pizza-hut-cozinha02');
  }

}
