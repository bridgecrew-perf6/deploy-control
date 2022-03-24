import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
