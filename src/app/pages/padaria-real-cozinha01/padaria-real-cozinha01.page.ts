import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha01',
  templateUrl: './padaria-real-cozinha01.page.html',
  styleUrls: ['./padaria-real-cozinha01.page.scss'],
})
export class PadariaRealCozinha01Page implements OnInit {

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
  
  showPadariaRealCozinha02() {
    this.navCtrl.navigateForward('padaria-real-cozinha02');
  }

}
