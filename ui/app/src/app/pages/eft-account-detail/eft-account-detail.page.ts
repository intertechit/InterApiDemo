import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/models/account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { MoneyTransferService } from 'src/app/services/money-transfer.service';
import { EftToAccountRequest } from 'src/app/models/eftToAccountRequest';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-eft-account-detail',
  templateUrl: './eft-account-detail.page.html',
  styleUrls: ['./eft-account-detail.page.scss'],
})
export class EftAccountDetailPage implements OnInit {
  sourceAccount: IAccount = null;
  targetAccount: IAccount = {};
  explanation = '';
  amount: number;
  receiverName = '';
  destinationBankCode: number;

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

  eft() {
    const request: EftToAccountRequest = {
      amount: this.amount,
      customerNo: this.sourceAccount.customerNo,
      // transferReason: this.explanation,
      destinationBankCode: this.destinationBankCode,
      destinationBranchCode: this.targetAccount.branchCode,
      eftDestinationAccount: this.targetAccount.customerNo,
      eftDestinationType: 'EFT_TYPE_TO_BRANCH',
      sourceAccount: {
        accountSuffix: this.sourceAccount.accountSuffix,
        branchCode: this.sourceAccount.branchCode,
        currencyCode: this.sourceAccount.currencyCode,
        customerNo: this.sourceAccount.customerNo
      },
      explanation: this.explanation,
      receiverName: this.receiverName
    };
    this.moneyTransferService.eftToAccount(request).subscribe(p => {
      this.notificationService.success('EFT işlemi tamamlandı. Transaction Id: ' + p.transactionId);
    });
  }
}
