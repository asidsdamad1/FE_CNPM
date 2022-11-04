import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './share/side-bar/side-bar.component';
import { NavBarComponent } from './share/nav-bar/nav-bar.component';
import { AddWalletComponent } from './component/wallet/add/add.component';
import { DetailWalletComponent } from './component/wallet/detail/detail.component';
import { ShowWalletComponent } from './component/wallet/show/show.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgToastModule} from "ng-angular-popup";
import {AddTransactionComponent} from "./component/home/add-transaction/add-transaction.component";
import {HomeComponent} from "./component/home/home.component";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {environment} from "../environments/environment";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AngularFireModule} from "@angular/fire/compat";
import {AddCategoryComponent} from "./component/category/add-category/add.component";
import {ShowCategoryComponent} from "./component/category/show-category/show.component";
import {LoginComponent} from "./component/login/login.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {RegisterComponent} from "./component/register/register.component";
import {ChangePasswordComponent} from "./component/change-password/change-password.component";
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import {FacebookLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {AddFirstWalletComponent} from "./component/login/add-first-wallet/add-first-wallet.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavBarComponent,
    AddWalletComponent,
    ShowWalletComponent,
    DetailWalletComponent,
    AddTransactionComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ChangePasswordComponent,
    AddFirstWalletComponent
  ],
  imports: [
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    NgxSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgxPaginationModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor, multi: true
    },{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [

          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('452735883619565')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
