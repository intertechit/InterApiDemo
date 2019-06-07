import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingService } from './loading.service';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

   constructor(private alertController: AlertController,
              private logginService: LoggingService) { }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    this.logginService.error(message);

    await alert.present();
  }
}
