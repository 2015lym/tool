import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private items: Array<string> = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.items = ['选项一', '选项二', '选项三', '选项四', '选项五'];
  }

  itemSelected(item: string) {
    alert(item);
  }

}
