import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WireAccountDetailPage } from './wire-account-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WireAccountDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WireAccountDetailPage]
})
export class WireAccountDetailPageModule {}
