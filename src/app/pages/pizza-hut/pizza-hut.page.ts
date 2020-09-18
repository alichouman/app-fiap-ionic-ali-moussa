import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pizza-hut',
  templateUrl: './pizza-hut.page.html',
  styleUrls: ['./pizza-hut.page.scss'],
})
export class PizzaHutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  showPageHome(){
    this.navCtrl.navigateForward('home');
  }
}