import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowWalletComponent} from "./component/wallet/show/show.component";
import {HomeComponent} from "./component/home/home.component";
import {ShowCategoryComponent} from "./component/category/show-category/show.component";

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
