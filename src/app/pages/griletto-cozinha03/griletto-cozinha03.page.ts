import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha03',
  templateUrl: './griletto-cozinha03.page.html',
  styleUrls: ['./griletto-cozinha03.page.scss'],
})
export class GrilettoCozinha03Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showGrilettoCozinha02() {
    this.navCtrl.navigateForward('griletto-cozinha02');
  }

  showGrilettoCozinha04() {
    this.navCtrl.navigateForward('griletto-cozinha04');
  }

}
