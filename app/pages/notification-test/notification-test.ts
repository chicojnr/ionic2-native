import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';

/*
Generated class for the NotificationTestPage page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/notification-test/notification-test.html',
})
export class NotificationTestPage {
  notificacao: any;
  constructor(private navCtrl: NavController) {
    LocalNotifications.on('click', (notification, state) =>
    {
      this.notificacao = notification;
    });
  }
  enviar() : void {
    LocalNotifications.schedule({
      id: 1,
      text: 'Notificação de teste',
      data: {secret: 'olá'}
    })
  }

}
