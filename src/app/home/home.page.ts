import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navCtrl : NavController) { }

  ngOnInit(){ 
  }

  showPageHome(){
    this.navCtrl.navigateForward('home');
  }

  showPageBurgerKing(){
    this.navCtrl.navigateForward('burger-king');
  }
  showPageChinaInBox(){
    this.navCtrl.navigateForward('china-in-box');
  }
  showPageDominos(){
    this.navCtrl.navigateForward('dominos');
  }
  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }
  showPageHabibs(){
    this.navCtrl.navigateForward('habibs');
  }
  showPageJonnyRockets(){
    this.navCtrl.navigateForward('jonny-rockets');
  }

  showPagePadariaReal(){
    this.navCtrl.navigateForward('padaria-real');
  }

  showPagePizzaHut(){
    this.navCtrl.navigateForward('pizza-hut');
  }

}
