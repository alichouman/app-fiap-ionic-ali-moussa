import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut-cozinha02',
  templateUrl: './pizza-hut-cozinha02.page.html',
  styleUrls: ['./pizza-hut-cozinha02.page.scss'],
})
export class PizzaHutCozinha02Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePizzaHut(){
    this.navCtrl.navigateForward('pizza-hut');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPizzaHutCozinha01() {
    this.navCtrl.navigateForward('pizza-hut-cozinha01');
  }
  
  showPizzaHutCozinha03() {
    this.navCtrl.navigateForward('pizza-hut-cozinha03');
  }

}
