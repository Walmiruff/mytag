import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-phone',
  templateUrl: './confirm-phone.page.html',
  styleUrls: ['./confirm-phone.page.scss'],
})
export class ConfirmPhonePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

    homeClient() {
        this.router.navigate(['home-client']);
    }
}
