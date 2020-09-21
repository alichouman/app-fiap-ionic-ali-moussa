import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha01',
  templateUrl: './pizza-hut-cozinha01.page.html',
  styleUrls: ['./pizza-hut-cozinha01.page.scss'],
})
export class PizzaHutCozinha01Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePizzaHut(){
    this.navCtrl.navigateForward('pizza-hut');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPizzaHutCozinha06() {
    this.navCtrl.navigateForward('pizza-hut-cozinha06');
  }
  
  showPizzaHutCozinha02() {
    this.navCtrl.navigateForward('pizza-hut-cozinha02');
  }

}
