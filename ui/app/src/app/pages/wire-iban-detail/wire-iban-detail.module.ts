import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WireIbanDetailPage } from './wire-iban-detail.page';
import { SharedComponentModule } from 'src/app/shared/shared.component.module';

const routes: Routes = [
  {
    path: '',
    component: WireIbanDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WireIbanDetailPage]
})
export class WireIbanDetailPageModule {}
