import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha05',
  templateUrl: './padaria-real-cozinha05.page.html',
  styleUrls: ['./padaria-real-cozinha05.page.scss'],
})
export class PadariaRealCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePadariaReal(){
    this.navCtrl.navigateForward('padaria-real');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPadariaRealCozinha06() {
    this.navCtrl.navigateForward('padaria-real-cozinha06');
  }
  
  showPadariaRealCozinha04() {
    this.navCtrl.navigateForward('padaria-real-cozinha04');
  }


}
