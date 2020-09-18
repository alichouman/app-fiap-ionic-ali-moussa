import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha06',
  templateUrl: './griletto-cozinha06.page.html',
  styleUrls: ['./griletto-cozinha06.page.scss'],
})
export class GrilettoCozinha06Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageGriletto(){
    this.navCtrl.navigateForward('griletto');
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }

  showGrilettoCozinha05() {
    this.navCtrl.navigateForward('griletto-cozinha05');
  }

  showGrilettoCozinha01() {
    this.navCtrl.navigateForward('griletto-cozinha01');
  }

}
