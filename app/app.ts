import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { CameraTestPage } from './pages/camera-test/camera-test';
import { NetworkTestPage } from './pages/network-test/network-test';
import { NotificationTestPage } from './pages/notification-test/notification-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<any>;

  constructor(public platform: Platform, public menuCtrl: MenuController) {
    this.pages = [
      {titulo: 'Home', componente: HomePage, icone: 'home'},
      {titulo: 'Camera', componente: CameraTestPage, icone: 'camera'},
      {titulo: 'Rede', componente: NetworkTestPage, icone: 'wifi'},
      {titulo: 'Notificações', componente: NotificationTestPage, icone: 'notifications'}
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  abrirPagina(page: any) : void {
    this.menuCtrl.close();
    this.rootPage = page.componente;
  }
}

ionicBootstrap(MyApp);
