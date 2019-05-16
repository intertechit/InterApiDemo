import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-wire',
  templateUrl: './wire-account.page.html',
  styleUrls: ['./wire-account.page.scss'],
})
export class WireAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(accountNumber: string) {
    this.router.navigate(['/wire-account-detail/' + accountNumber]);
  }
}
