import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EftIbanDetailPage } from './eft-iban-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EftIbanDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EftIbanDetailPage]
})
export class EftIbanDetailPageModule {}
