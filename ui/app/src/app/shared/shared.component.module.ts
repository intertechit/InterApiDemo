import { NgModule } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AccountListComponent],
  exports: [AccountListComponent]
})
export class SharedComponentModule {}
