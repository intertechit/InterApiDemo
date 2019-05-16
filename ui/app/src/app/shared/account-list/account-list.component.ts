import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/models/account';

@Component({
  selector: 'inter-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  @Output() selectAccount = new EventEmitter<string>();
  accounts: IAccount[];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccountList().subscribe(accountList => this.accounts = accountList);
  }

  navigate(account: IAccount) {
    const accountNumber = account.branchCode.toString() + account.customerNo.toString() + account.accountSuffix.toString();
    this.selectAccount.emit(accountNumber);
  }
}
