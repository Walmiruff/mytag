import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home-client', loadChildren: '../home-client/home-client.module#HomeClientPageModule' },
      { path: 'camera', loadChildren: '../camera/camera.module#CameraPageModule' },
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/home-client',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
