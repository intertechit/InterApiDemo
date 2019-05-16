import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountDetailPage } from './account-detail.page';
import { SharedComponentModule } from 'src/app/shared/shared.component.module';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountDetailPage]
})
export class AccountDetailPageModule {}
