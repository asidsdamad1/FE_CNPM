import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowWalletComponent} from "./component/wallet/show/show.component";

const routes: Routes = [{
  path: 'wallet',
  component: ShowWalletComponent,
  loadChildren: () => import('./component/wallet/show/show-wallet-routing.module').then(module => module.ShowWalletRoutingModule)
}, {

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
