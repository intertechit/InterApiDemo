import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { MoneyTransferService } from 'src/app/services/money-transfer.service';
import { WireToIbanRequest } from 'src/app/models/wireToIbanRequest';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-wire-iban-detail',
  templateUrl: './wire-iban-detail.page.html',
  styleUrls: ['./wire-iban-detail.page.scss'],
})
export class WireIbanDetailPage implements OnInit {
  sourceAccount: IAccount = null;
  ibanNumber: '';
  customerNo: '';
  explanation = '';
  amount: number;
  receiverName = '';

  constructor(private activeRoute: ActivatedRoute,
    private wireService: MoneyTransferService,
    private accountService: AccountService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const accountNumber = this.activeRoute.snapshot.paramMap.get('sourceAccount');
    this.accountService.getAccount(accountNumber).subscribe(acc => {
      this.sourceAccount = acc;
    });
  }

  wire() {
    const request: WireToIbanRequest = {
      amount: this.amount,
      customerNo: this.sourceAccount.customerNo,
      sourceAccount: {
        accountSuffix: this.sourceAccount.accountSuffix,
        branchCode: this.sourceAccount.branchCode,
        currencyCode: this.sourceAccount.currencyCode,
        customerNo: this.sourceAccount.customerNo
      },
      explanation: this.explanation,
      receiverName: this.receiverName,
      iBANNumber: this.ibanNumber
    };
    this.wireService.wireToIban(request).subscribe(p => {
      this.notificationService.success('Havale işlemi tamamlandı. Transaction Id: ' + p.transactionId);
    });
  }
}
