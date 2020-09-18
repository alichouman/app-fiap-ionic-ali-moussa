import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha04',
  templateUrl: './griletto-cozinha04.page.html',
  styleUrls: ['./griletto-cozinha04.page.scss'],
})
export class GrilettoCozinha04Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showGrilettoCozinha03() {
    this.navCtrl.navigateForward('griletto-cozinha03');
  }

  showGrilettoCozinha05() {
    this.navCtrl.navigateForward('griletto-cozinha05');
  }

}
