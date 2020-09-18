import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-padaria-real',
  templateUrl: './padaria-real.page.html',
  styleUrls: ['./padaria-real.page.scss'],
})
export class PadariaRealPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  showPageHome(){
    this.navCtrl.navigateForward('home');
  }
}