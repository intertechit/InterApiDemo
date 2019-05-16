import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/models/account';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {

  accounts: IAccount[] = [];
  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit(): void { }

  ionViewWillEnter() {
    this.menuController.enable(true);
  }


  navigate(accountNumber: string) {
    this.router.navigate(['/accountdetail/' + accountNumber]);
  }
}
