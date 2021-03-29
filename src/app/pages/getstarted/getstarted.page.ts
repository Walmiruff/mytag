import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.page.html',
  styleUrls: ['./getstarted.page.scss'],
})
export class GetstartedPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  paypal() {
    console.log("BUY")
    this.router.navigateByUrl('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NTXHF8GVJTT7A');
  }

  async visit(url): Promise<any> {
    await Browser.open({ url: url });
  }
  

}
