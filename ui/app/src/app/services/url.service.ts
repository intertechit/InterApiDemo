import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  get apiUrl(): string {
    return environment.production ? '/api' : 'http://localhost:5000/api';
  }

  get wireController() {
    const controllerName = 'wire';

    return {
      name: controllerName,
      account: `${this.apiUrl}/${controllerName}/account`,
      iban: `${this.apiUrl}/${controllerName}/iban`,
    };
  }

  get eftController() {
    const controllerName = 'eft';

    return {
      name: controllerName,
      account: `${this.apiUrl}/${controllerName}/account`,
      iban: `${this.apiUrl}/${controllerName}/iban`,
    };
  }

  get accountController() {
    const controllerName = 'account';
    return {
      name: controllerName,
      transactionList: `${this.apiUrl}/${controllerName}/transactionList`,
      accountList: `${this.apiUrl}/${controllerName}/accountList`,
    };
  }
}


  // private builder(controllerName, ...relativePath: string[]) {
  //   return [this.apiUrl, controllerName].concat(relativePath).join('/');
  // }
