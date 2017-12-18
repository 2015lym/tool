import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../app/services/toast.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private items: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private toast: ToastService,
    private storage: Storage) {

  }

  ionViewDidEnter() {
    this.storage.get('draw').then((data) => {
      if (data) {
        this.items = data;
      } else {
        this.toast.show('没有数据');
      }
    });
  }

  itemSelected(item: string) {

  }


  addItem() {
    let prompt = this.alertCtrl.create({
      title: '请输入添加内容',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
