import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real',
  templateUrl: './padaria-real.page.html',
  styleUrls: ['./padaria-real.page.scss'],
})
export class PadariaRealPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPagePadariaRealCozinha01(){
    this.navCtrl.navigateForward('padaria-real-cozinha01');
  }
  showPagePadariaRealCozinha02(){
    this.navCtrl.navigateForward('padaria-real-cozinha02');
  }
  showPagePadariaRealCozinha03(){
    this.navCtrl.navigateForward('padaria-real-cozinha03');
  }
  showPagePadariaRealCozinha04(){
    this.navCtrl.navigateForward('padaria-real-cozinha04');
  }
  showPagePadariaRealCozinha05(){
    this.navCtrl.navigateForward('padaria-real-cozinha05');
  }
  showPagePadariaRealCozinha06(){
    this.navCtrl.navigateForward('padaria-real-cozinha06');
  }
}