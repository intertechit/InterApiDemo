import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/models/account';
import { MoneyTransferService } from 'src/app/services/money-transfer.service';
import { WireToAccountRequest } from 'src/app/models/wireToAccountRequest';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-wire-account-detail',
  templateUrl: './wire-account-detail.page.html',
  styleUrls: ['./wire-account-detail.page.scss'],
})
export class WireAccountDetailPage implements OnInit {
  sourceAccount: IAccount = null;
  targetAccount: IAccount = {};
  explanation = '';
  amount: number;
  receiverName = '';

  constructor(private activeRoute: ActivatedRoute,
    private accountService: AccountService,
    private moneyTransferService: MoneyTransferService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const accountNumber = this.activeRoute.snapshot.paramMap.get('sourceAccount');
    this.accountService.getAccount(accountNumber).subscribe(acc => {
      this.sourceAccount = acc;
    });
  }

  wire() {
    const request: WireToAccountRequest = {
      Amount: this.amount,
      CustomerNo: this.sourceAccount.customerNo,
      SourceAccount: {
        accountSuffix: this.sourceAccount.accountSuffix,
        branchCode: this.sourceAccount.branchCode,
        currencyCode: this.sourceAccount.currencyCode,
        customerNo: this.sourceAccount.customerNo
      },
      DestinationAccount: {
        accountSuffix: this.targetAccount.accountSuffix,
        branchCode: this.targetAccount.branchCode,
        currencyCode: this.targetAccount.currencyCode || this.sourceAccount.currencyCode,
        customerNo: this.targetAccount.customerNo
      },
      Explanation: this.explanation,
      ReceiverName: this.receiverName
    };
    this.moneyTransferService.wireToAccount(request).subscribe(p => {
      this.notificationService.success('Havale işlemi tamamlandı. Transaction Id: ' + p.transactionId);
    });
  }
}
