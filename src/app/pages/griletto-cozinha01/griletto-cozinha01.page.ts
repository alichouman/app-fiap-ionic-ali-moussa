import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto-cozinha01',
  templateUrl: './griletto-cozinha01.page.html',
  styleUrls: ['./griletto-cozinha01.page.scss'],
})
export class GrilettoCozinha01Page implements OnInit {

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

  showGrilettoCozinha06() {
    this.navCtrl.navigateForward('griletto-cozinha06');
  }

}
