import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async visit(url): Promise<any> {
    await Browser.open({ url: url });
  }
  
}
