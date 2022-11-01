import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLogin = false;
  idUser = localStorage.getItem('ID');
  idWallet = localStorage.getItem("ID_WALLET")
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.isLogin = false;
    this.router.navigate(['/login']).then();
  }
}
