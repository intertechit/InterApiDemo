import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/models/account';
import { AccountActivity } from 'src/app/models/accountActivity';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  account: IAccount = null;
  accountActivityList: AccountActivity[] = [];
  constructor(private activeRoute: ActivatedRoute, private accountService: AccountService) { }

  getHeader(account: IAccount, activity: AccountActivity) {
    try {
      const date = new Date(activity.date);
      const dateStr = date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
      const amountStr = activity.amount + ' ' + (account.currencyCode === 'TRY' ? 'TL' : account.currencyCode);
      const header = dateStr + ' / ' + amountStr;
      return header;
    } catch (e) {
      return '';
    }
  }

  ngOnInit() {
    const accountNumber = this.activeRoute.snapshot.paramMap.get('accountNumber');
    this.accountService.getAccount(accountNumber).subscribe(acc => {
      this.account = acc;
      this.accountService.getAccountTransactionList(acc).subscribe(activityList => {
        this.accountActivityList = activityList;
      });
    });
  }
}
