import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  async showLoadingAsync() {

    const loading = await this.loadingController.create({
      message: 'Please Wait'
    });
    await loading.present();
    return loading;
  }

  hideLoadingAsync() {
    return this.loadingController.dismiss();
  }
}
