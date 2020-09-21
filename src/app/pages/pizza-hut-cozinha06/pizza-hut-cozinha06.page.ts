import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha06',
  templateUrl: './pizza-hut-cozinha06.page.html',
  styleUrls: ['./pizza-hut-cozinha06.page.scss'],
})
export class PizzaHutCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showPagePizzaHut() {
    this.navCtrl.navigateForward('pizza-hut');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPizzaHutCozinha05() {
    this.navCtrl.navigateForward('pizza-hut-cozinha05');
  }

  showPizzaHutCozinha01() {
    this.navCtrl.navigateForward('pizza-hut-cozinha01');
  }

}
