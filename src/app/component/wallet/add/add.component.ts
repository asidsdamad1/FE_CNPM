import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WalletService} from "../../../service/wallet.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddWalletComponent implements OnInit {

  walletForm = new FormGroup({
    name: new FormControl(),
    moneyType: new FormControl(),
    moneyAmount: new FormControl()
  });
  icon: any;
  wallet: any;

  constructor(private walletService: WalletService,
              private router: Router,
              private toast : NgToastService) { }

  ngOnInit(): void {
    this.icon = "https://static.moneylover.me/img/icon/icon_32.png"
  }

  changeIcon(event: any) {
    this.icon = event.target.src;
  }

  @Output()
  onNewWallet = new EventEmitter<any>()

  addWallet() {
    this.wallet = {
      name: this.walletForm.value.name,
      moneyType: {
        id: this.walletForm.value.moneyType,
      },
      icon: this.icon,
      moneyAmount: this.walletForm.value.moneyAmount,
      status: 1,
      user: {
        id: localStorage.getItem('ID')
      }
    }
    console.log(this.wallet)
    this.walletService.save(this.wallet).subscribe((data) => {
      this.onNewWallet.emit(data)
      this.toast.success({detail:"Thông báo", summary: "Thêm ví thành công!",duration: 3000,position:'br'})
      this.router.navigate(['/wallet' + localStorage.getItem('ID_WALLET')]).then();
    }, error => {
      this.toast.error({detail:"Thông báo", summary: "Thêm ví thất bại!",duration: 3000,position:'br'})
    })
  }
}
