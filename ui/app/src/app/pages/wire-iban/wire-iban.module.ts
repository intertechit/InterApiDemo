import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WireIbanPage } from './wire-iban.page';
import { SharedComponentModule } from 'src/app/shared/shared.component.module';

const routes: Routes = [
  {
    path: '',
    component: WireIbanPage
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
  declarations: [WireIbanPage]
})
export class WireIbanPageModule {}
