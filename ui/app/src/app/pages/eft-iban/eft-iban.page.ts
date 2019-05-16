import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eft-iban',
  templateUrl: './eft-iban.page.html',
  styleUrls: ['./eft-iban.page.scss'],
})
export class EftIbanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(accountNumber: string) {
    this.router.navigate(['/eft-iban-detail/' + accountNumber]);
  }

}
