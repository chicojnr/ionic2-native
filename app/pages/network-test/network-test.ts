import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Network } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/network-test/network-test.html',
})
export class NetworkTestPage {
  tipoConexao: any;
  constructor(private navCtrl: NavController) {

  }

  checarConexao() : void {
    this.tipoConexao = Network.connection;
    console.log(this.tipoConexao);
  }
}
