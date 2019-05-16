import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    loadChildren: './pages/account-list/account-list.module#AccountListPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'accountdetail/:accountNumber',
    loadChildren: './pages/account-detail/account-detail.module#AccountDetailPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'wire-account',
    loadChildren: './pages/wire-account/wire-account.module#WireAccountPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'wire-account-detail/:sourceAccount',
    loadChildren: './pages/wire-account-detail/wire-account-detail.module#WireAccountDetailPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'money-transfer',
    loadChildren: './pages/money-transfer/money-transfer.module#MoneyTransferPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'wire-iban',
    loadChildren: './pages/wire-iban/wire-iban.module#WireIbanPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'wire-iban-detail/:sourceAccount',
    loadChildren: './pages/wire-iban-detail/wire-iban-detail.module#WireIbanDetailPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'eft-account',
    loadChildren: './pages/eft-account/eft-account.module#EftAccountPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'eft-iban',
    loadChildren: './pages/eft-iban/eft-iban.module#EftIbanPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'eft-account-detail/:sourceAccount',
    loadChildren: './pages/eft-account-detail/eft-account-detail.module#EftAccountDetailPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'eft-iban-detail/:sourceAccount',
    loadChildren: './pages/eft-iban-detail/eft-iban-detail.module#EftIbanDetailPageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
