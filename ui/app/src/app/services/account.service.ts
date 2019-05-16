import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from './url.service';
import { catchError, map, tap, first, find, skip, take, reduce } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { AccountActivity } from '../models/accountActivity';
import { AccountListMessage } from '../models/accountListMessage';
import { IAccount } from '../models/account';
import { AccountActivityListMessage } from '../models/accountActivityListMessage';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: IAccount[] = [];
  constructor(private httpClient: HttpClient,
    private urlService: UrlService,
    private sessionService: SessionService) { }

  getAccountList() {
    const params = { customerNumber: this.sessionService.customerNumber.toString() };
    return this.httpClient.get<AccountListMessage>(this.urlService.accountController.accountList, { params: params })
      .pipe(map(result => result && result.accountList || []), tap(accounts => this.accounts = accounts));
  }

  getAccount(accountNumber: string) {
    const subject = new Subject<IAccount>();

    if (this.accounts.length > 0) {
      // tslint:disable-next-line:max-line-length
      const account = this.accounts.find(acc => accountNumber === acc.branchCode.toString() + acc.customerNo.toString() + acc.accountSuffix.toString());
      return of(account);
    }

    this.getAccountList().subscribe(list => {
      if (list && list.length) {
        const account = this.accounts.find(acc => {
          return accountNumber === acc.branchCode.toString() + acc.customerNo.toString() + acc.accountSuffix.toString();
        });

        subject.next(account);
      }
    });

    return subject;
  }

  getAccountTransactionList(acc: IAccount) {
    const subject = new Subject<AccountActivity[]>();
    const queryParams = {
      accountSuffix: acc.accountSuffix.toString(),
      branchCode: acc.branchCode.toString(),
      customerNo: acc.customerNo.toString()
    };

    this.httpClient.get<AccountActivityListMessage>(this.urlService.accountController.transactionList, { params: queryParams })
      .subscribe(accountListMessage => {
        if (accountListMessage.activityCollection && accountListMessage.activityCollection.length) {
          subject.next(accountListMessage.activityCollection);
        }
      });

    return subject;
  }
}
