import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eft-account',
  templateUrl: './eft-account.page.html',
  styleUrls: ['./eft-account.page.scss'],
})
export class EftAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(accountNumber: string) {
    this.router.navigate(['/eft-account-detail/' + accountNumber]);
  }

}
