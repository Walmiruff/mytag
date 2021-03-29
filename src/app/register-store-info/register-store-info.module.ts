import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterStoreInfoPage } from './register-store-info.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterStoreInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterStoreInfoPage]
})
export class RegisterStoreInfoPageModule {}
