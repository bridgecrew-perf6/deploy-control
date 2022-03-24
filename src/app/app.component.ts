import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deploy-control';
  subscription: Subscription;
  lang: string = "es";

  constructor(public translate: TranslateService, public primeNGConfig: PrimeNGConfig){
    translate.addLangs(['en', 'fr','es']);         
    translate.setDefaultLang('es');
  
    this.subscription = this.translate.stream('primeng').subscribe(data => {
      this.primeNGConfig.setTranslation(data);
  }); 
  }

  changeLang(lang: string) {
    this.translate.use(lang);
}
}
