import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera} from 'ionic-native';

/*
  Generated class for the CameraTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/camera-test/camera-test.html',
})
export class CameraTestPage {
  imagem: any;
  constructor(private navCtrl: NavController) {

  }

  tirarFoto() : void {
    Camera.getPicture({
      quality: 100,
      cameraDirection: Camera.Direction.FRONT,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagem = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

}
