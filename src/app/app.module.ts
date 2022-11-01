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

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    AddWalletComponent,
    ShowWalletComponent,
    DetailWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    ReactiveFormsModule,
    NgToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
