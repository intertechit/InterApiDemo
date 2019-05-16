import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wire-iban',
  templateUrl: './wire-iban.page.html',
  styleUrls: ['./wire-iban.page.scss'],
})
export class WireIbanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(accountNumber: string) {
    this.router.navigate(['/wire-iban-detail/' + accountNumber]);
  }
}
