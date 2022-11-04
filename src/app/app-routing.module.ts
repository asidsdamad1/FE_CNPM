import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowWalletComponent} from "./component/wallet/show/show.component";
import {HomeComponent} from "./component/home/home.component";
import {ShowCategoryComponent} from "./component/category/show-category/show.component";
import {LoginComponent} from "./component/login/login.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {RegisterComponent} from "./component/register/register.component";
import {ChangePasswordComponent} from "./component/change-password/change-password.component";
import {AuthGuard} from "./helper/auth-guard";
import {AddFirstWalletComponent} from "./component/login/add-first-wallet/add-first-wallet.component";
import {AddWalletComponent} from "./component/wallet/add/add.component";

const routes: Routes = [{
  path: 'home',
  canActivate: [AuthGuard],
  component: HomeComponent
}, {
  path: 'wallet',
  canActivate: [AuthGuard],
  component: ShowWalletComponent,
  loadChildren: () => import('./component/wallet/show/show-wallet-routing.module').then(module => module.ShowWalletRoutingModule)
}, {
  path: 'category',
  canActivate: [AuthGuard],
  component: ShowCategoryComponent
}, {
  path: 'login',
  component: LoginComponent
},{
  path: '',
  component: LoginComponent
}, {
  path: 'profile',
  canActivate: [AuthGuard],
  component: ProfileComponent
}, {
  path: 'register',
  canActivate: [AuthGuard],
  component: RegisterComponent
}, {
  path: 'change-password',
  canActivate: [AuthGuard],
  component: ChangePasswordComponent
}, {
  path: 'create',
  component: AddFirstWalletComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
