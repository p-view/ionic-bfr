import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.page.html',
  styleUrls: ['./imprint.page.scss'],
})
export class ImprintPage implements OnInit {
textDefault: any;
  constructor(
    private storage: Storage,
     private translate: TranslateService 
    ) { }

  ngOnInit() {

this.storage.get('s2').then((val) => {
                        if (val != null) {
                            console.log('active', val); 
                             
                           
                        } else {
                           console.log('not set') ;
                         this.textDefault= 'notset';
                         
                           }
                    });



  }
    getCurrentLang(){
return this.translate.currentLang;
  }
}
