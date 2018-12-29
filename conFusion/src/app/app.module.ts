import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DishService } from './service/dish.service';
import { PromotionService } from './service/promotion.service';
import { LeaderService } from './service/leader.service';
import { ProcessHttpmsgService } from './service/process-httpmsg.service';

import { baseURL } from '../shared/baseurl';
import { HttpModule } from '@angular/http';
import { ReservationPageModule } from './reservation/reservation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentPage } from '../app/comment/comment.page';
import { CommentPageModule } from '../app/comment/comment.module';
import {DatePipe} from '@angular/common';
import { LoginPageModule } from '../app/login/login.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],

  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageModule,
    ReservationPageModule,
    CommentPageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DishService,
    PromotionService,
    LeaderService,
    DatePipe,

    ProcessHttpmsgService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
