import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha05',
  templateUrl: './griletto-cozinha05.page.html',
  styleUrls: ['./griletto-cozinha05.page.scss'],
})
export class GrilettoCozinha05Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showGrilettoCozinha04() {
    this.navCtrl.navigateForward('griletto-cozinha04');
  }

  showGrilettoCozinha06() {
    this.navCtrl.navigateForward('griletto-cozinha06');
  }
}
