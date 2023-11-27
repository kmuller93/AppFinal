import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

//============== Firebase ==============

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EmailComposer, HttpClientModule],
>>>>>>> ca8d6754b729025d808eca360eebd19b06297d88
  bootstrap: [AppComponent],
})
export class AppModule {}
