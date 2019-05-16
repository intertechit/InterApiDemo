import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WireAccountPage } from './wire-account.page';
import { SharedComponentModule } from 'src/app/shared/shared.component.module';

const routes: Routes = [
  {
    path: '',
    component: WireAccountPage
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
  declarations: [WireAccountPage]
})
export class WireAccountPageModule {}
