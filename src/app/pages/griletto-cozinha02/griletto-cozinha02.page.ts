import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha02',
  templateUrl: './griletto-cozinha02.page.html',
  styleUrls: ['./griletto-cozinha02.page.scss'],
})
export class GrilettoCozinha02Page implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showGrilettoCozinha01() {
    this.navCtrl.navigateForward('griletto-cozinha01');
  }

  showGrilettoCozinha03() {
    this.navCtrl.navigateForward('griletto-cozinha03');
  }
}
