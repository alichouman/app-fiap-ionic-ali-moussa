import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-griletto',
  templateUrl: './griletto.page.html',
  styleUrls: ['./griletto.page.scss'],
})
export class GrilettoPage implements OnInit {


  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  showPageHome() {
    this.navCtrl.navigateForward('home');
  }
  showPageGrilettoCozinha01(){
    this.navCtrl.navigateForward('griletto-cozinha01');
  }
  showPageGrilettoCozinha02(){
    this.navCtrl.navigateForward('griletto-cozinha02');
  }
  showPageGrilettoCozinha03(){
    this.navCtrl.navigateForward('griletto-cozinha03');
  }
  showPageGrilettoCozinha04(){
    this.navCtrl.navigateForward('griletto-cozinha04');
  }
  showPageGrilettoCozinha05(){
    this.navCtrl.navigateForward('griletto-cozinha05');
  }
  showPageGrilettoCozinha06(){
    this.navCtrl.navigateForward('griletto-cozinha06');
  }
}