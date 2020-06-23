import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteSelbstbildfremdbildPage } from './karte-selbstbildfremdbild.page';

const routes: Routes = [
  {
    path: '',
    component: KarteSelbstbildfremdbildPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteSelbstbildfremdbildPage]
})
export class KarteSelbstbildfremdbildPageModule {}
