import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import { WireToAccountMessage } from '../models/wireToAccountMessage';
import { WireToAccountRequest } from '../models/wireToAccountRequest';
import { WireToIbanRequest } from '../models/wireToIbanRequest';
import { EftToAccountRequest } from '../models/eftToAccountRequest';
import { EftToIbanRequest } from '../models/eftToIbanRequest';
import { AccountEftMessage } from '../models/accountEftMessage';
import { IbanEftMessage } from '../models/ibanEftMessage';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {
  constructor(private httpClient: HttpClient, private urlService: UrlService) {}

  wireToAccount(wireRequest: WireToAccountRequest) {
    return this.httpClient.post<WireToAccountMessage>(this.urlService.wireController.account, wireRequest);
  }

  wireToIban(wireRequest: WireToIbanRequest) {
    return this.httpClient.post<WireToAccountMessage>(this.urlService.wireController.iban, wireRequest);
  }

  eftToAccount(eftRequest: EftToAccountRequest) {
    return this.httpClient.post<IbanEftMessage>(this.urlService.eftController.account, eftRequest);
  }

  eftToIban(eftRequest: EftToIbanRequest) {
    return this.httpClient.post<AccountEftMessage>(this.urlService.eftController.iban, eftRequest);
  }
}
