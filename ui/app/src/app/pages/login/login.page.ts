import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  customerNo: number | null;
  constructor(private router: Router,
    private menuController: MenuController,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.sessionService.customerNumber = 0;
    this.customerNo = 17975;
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  login() {
    this.sessionService.customerNumber = this.customerNo;
    this.router.navigate(['/accounts']);
  }
}
