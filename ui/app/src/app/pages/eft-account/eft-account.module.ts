import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EftAccountPage } from './eft-account.page';
import { SharedComponentModule } from 'src/app/shared/shared.component.module';

const routes: Routes = [
  {
    path: '',
    component: EftAccountPage
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
  declarations: [EftAccountPage]
})
export class EftAccountPageModule {}
