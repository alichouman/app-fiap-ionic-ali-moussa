import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha04',
  templateUrl: './pizza-hut-cozinha04.page.html',
  styleUrls: ['./pizza-hut-cozinha04.page.scss'],
})
export class PizzaHutCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePizzaHut(){
    this.navCtrl.navigateForward('pizza-hut');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPizzaHutCozinha05() {
    this.navCtrl.navigateForward('pizza-hut-cozinha05');
  }
  
  showPizzaHutCozinha03() {
    this.navCtrl.navigateForward('pizza-hut-cozinha03');
  }
}
