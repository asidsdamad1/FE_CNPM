import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowWalletComponent} from "./component/wallet/show/show.component";
import {HomeComponent} from "./component/home/home.component";
import {ShowCategoryComponent} from "./component/category/show-category/show.component";
import {LoginComponent} from "./component/login/login.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {RegisterComponent} from "./component/register/register.component";
import {ChangePasswordComponent} from "./component/change-password/change-password.component";

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'wallet',
  component: ShowWalletComponent,
  loadChildren: () => import('./component/wallet/show/show-wallet-routing.module').then(module => module.ShowWalletRoutingModule)
}, {
  path: 'category',
  component: ShowCategoryComponent
}, {
  path: 'login',
  component: LoginComponent
},{
  path: '',
  component: LoginComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'change-password',
  component: ChangePasswordComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
