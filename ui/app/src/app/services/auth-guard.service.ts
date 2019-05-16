import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router, private sessionService: SessionService) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.sessionService.customerNumber) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
