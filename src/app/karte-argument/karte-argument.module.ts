import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteArgumentPage } from './karte-argument.page';

const routes: Routes = [
  {
    path: '',
    component: KarteArgumentPage
  }
];

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteArgumentPage]
})
export class KarteArgumentPageModule {}
