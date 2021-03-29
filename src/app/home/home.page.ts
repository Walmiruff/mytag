import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public currUser: any;
  constructor(
    private router: Router
  ) {
  }
  
  // paypal() {
  //   console.log("BUY")
  //   this.router.navigateByUrl('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NTXHF8GVJTT7A');
  // }

    login() {
        this.router.navigate(['login']);
    }
}
