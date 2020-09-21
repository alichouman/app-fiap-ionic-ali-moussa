import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha03',
  templateUrl: './padaria-real-cozinha03.page.html',
  styleUrls: ['./padaria-real-cozinha03.page.scss'],
})
export class PadariaRealCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePadariaReal(){
    this.navCtrl.navigateForward('padaria-real');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPadariaRealCozinha04() {
    this.navCtrl.navigateForward('padaria-real-cozinha04');
  }
  
  showPadariaRealCozinha02() {
    this.navCtrl.navigateForward('padaria-real-cozinha02');
  }

}
