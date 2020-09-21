import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha06',
  templateUrl: './padaria-real-cozinha06.page.html',
  styleUrls: ['./padaria-real-cozinha06.page.scss'],
})
export class PadariaRealCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePadariaReal(){
    this.navCtrl.navigateForward('padaria-real');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPadariaRealCozinha01() {
    this.navCtrl.navigateForward('padaria-real-cozinha01');
  }
  
  showPadariaRealCozinha05() {
    this.navCtrl.navigateForward('padaria-real-cozinha05');
  }


}
