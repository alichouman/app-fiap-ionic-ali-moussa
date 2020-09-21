import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real-cozinha02',
  templateUrl: './padaria-real-cozinha02.page.html',
  styleUrls: ['./padaria-real-cozinha02.page.scss'],
})
export class PadariaRealCozinha02Page implements OnInit {

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
  
  showPadariaRealCozinha01() {
    this.navCtrl.navigateForward('padaria-real-cozinha01');
  }


}
