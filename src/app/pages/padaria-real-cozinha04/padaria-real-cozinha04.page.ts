import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha04',
  templateUrl: './padaria-real-cozinha04.page.html',
  styleUrls: ['./padaria-real-cozinha04.page.scss'],
})
export class PadariaRealCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPagePadariaReal(){
    this.navCtrl.navigateForward('padaria-real');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showPadariaRealCozinha03() {
    this.navCtrl.navigateForward('padaria-real-cozinha03');
  }
  
  showPadariaRealCozinha05() {
    this.navCtrl.navigateForward('padaria-real-cozinha05');
  }


}
