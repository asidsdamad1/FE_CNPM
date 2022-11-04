import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../service/wallet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  image: any;
  wallet: any;
  isLack: boolean | undefined;
  constructor(private walletService: WalletService, private router: Router) { }

  ngOnInit(): void {
    this.image = localStorage.getItem('AVATAR');
    this.findWallet();
  }

  directProfile() {
    this.router.navigate(['/profile/']);
  }
  findWallet() {
    // @ts-ignore
    this.walletService.findById(localStorage.getItem('ID_WALLET')).subscribe((wallet) => {
      this.wallet = wallet;
    })
  }

  isLackOfMoney() : boolean {
    return this.isLack = this.wallet.moneyAmount < 0;
  }
}
