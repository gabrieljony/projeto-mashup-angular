import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { forwardRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatIconModule, MatPaginatorIntl } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ToasterModule } from 'angular2-toaster';
import 'hammerjs';
import { BlockUIModule } from 'ng-block-ui';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { ChartsModule } from 'ng2-charts';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/_guards';
import { AuthInterceptor } from './auth/_guards/auth.interceptor';
import { AuthModule } from './auth/_guards/auth.module';
import { IdentityStorage } from './auth/_models/identity.storage';
import { AuthenticationService } from './auth/_services';
import { MaterialModule } from './material.module';
import { BaseComponent } from './pages/base/base.component';
import { LoginComponent } from './pages/login/login.component';
import { MatPaginatorIntlGerman } from './pages/table-format-page/mat-paginator-int';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { PadraoService } from './service/padrao/padrao.service';
import { UsuarioService } from './service/usuario/usuario.service';
import { HighlightJsService } from 'angular2-highlight-js';
import { QlikComponent } from './qlik/qlik.component';



const globalSettings: RecaptchaSettings = {siteKey: '6Lc8vGwUAAAAAOsheXbsSd7qKpwLv0t2ECF1i___'};


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BaseComponent,
    LoginComponent,
    QlikComponent
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxMaskModule.forRoot(),
    BlockUIModule.forRoot(),
    ToasterModule.forRoot(),
    AuthModule,
    ChartsModule,
    NgxHmCarouselModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
    PadraoService, 
    IdentityStorage, 
    AuthGuard, 
    AuthenticationService,
    UsuarioService,
    HighlightJsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy} ,
    {provide: RECAPTCHA_SETTINGS, useValue: globalSettings, },
    {provide: MatPaginatorIntl, useClass: forwardRef(() => MatPaginatorIntlGerman),}
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
