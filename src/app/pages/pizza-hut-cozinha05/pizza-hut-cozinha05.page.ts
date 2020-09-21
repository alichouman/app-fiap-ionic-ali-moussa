import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha05',
  templateUrl: './pizza-hut-cozinha05.page.html',
  styleUrls: ['./pizza-hut-cozinha05.page.scss'],
})
export class PizzaHutCozinha05Page implements OnInit {

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
  
  showPizzaHutCozinha06() {
    this.navCtrl.navigateForward('pizza-hut-cozinha06');
  }

}
