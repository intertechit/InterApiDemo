import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public alertController: AlertController) { }

  async success(message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
