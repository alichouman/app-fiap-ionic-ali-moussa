import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut',
  templateUrl: './pizza-hut.page.html',
  styleUrls: ['./pizza-hut.page.scss'],
})
export class PizzaHutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPagePizzaHutCozinha01() {
    this.navCtrl.navigateForward('pizza-hut-cozinha01');
  }
  showPagePizzaHutCozinha02() {
    this.navCtrl.navigateForward('pizza-hut-cozinha02');
  }
  showPagePizzaHutCozinha03() {
    this.navCtrl.navigateForward('pizza-hut-cozinha03');
  }
  showPagePizzaHutCozinha04() {
    this.navCtrl.navigateForward('pizza-hut-cozinha04');
  }
  showPagePizzaHutCozinha05() {
    this.navCtrl.navigateForward('pizza-hut-cozinha05');
  }
  showPagePizzaHutCozinha06() {
    this.navCtrl.navigateForward('pizza-hut-cozinha06');
  }
}