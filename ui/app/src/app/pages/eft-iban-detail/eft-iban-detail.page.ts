import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/models/account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { MoneyTransferService } from 'src/app/services/money-transfer.service';
import { EftToIbanRequest } from 'src/app/models/eftToIbanRequest';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-eft-iban-detail',
  templateUrl: './eft-iban-detail.page.html',
  styleUrls: ['./eft-iban-detail.page.scss'],
})
export class EftIbanDetailPage implements OnInit {
  sourceAccount: IAccount = null;
  targetAccount: IAccount = {};
  explanation = '';
  amount: number;
  ibanNumber: string;
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
    const request: EftToIbanRequest = {
      amount: this.amount,
      customerNo: this.sourceAccount.customerNo,
      senderName: this.sourceAccount.accountName,
      IBANNo: this.ibanNumber,
      receiverName: this.receiverName,
      destinationBankCode: this.destinationBankCode,
      sourceAccount: {
        accountSuffix: this.sourceAccount.accountSuffix,
        branchCode: this.sourceAccount.branchCode,
        currencyCode: this.sourceAccount.currencyCode,
        customerNo: this.sourceAccount.customerNo
      },
      explanation: this.explanation
    };
    this.moneyTransferService.eftToIban(request).subscribe(p => {
      this.notificationService.success('EFT işlemi tamamlandı. Transaction Id: ' + p.transactionId);
    });
  }
}
