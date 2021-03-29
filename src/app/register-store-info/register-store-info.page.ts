import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-store-info',
  templateUrl: './register-store-info.page.html',
  styleUrls: ['./register-store-info.page.scss'],
})
export class RegisterStoreInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    homeStore() {
        this.router.navigate(['home-store']);
    }
}
