import { Component, OnInit } from '@angular/core';

// Use Service Http Provider - src/app/services/http.service.ts
import { HttpService } from '../../services/http.service';

// Capacitor Browser Plugin
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;



@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.page.html',
  styleUrls: ['./httpclient.page.scss'],
})

export class HttpclientPage implements OnInit {
  public news : any;
  public country : any;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this. getNews("my");
  }

  getNews(country) {
    // get data from Http Service Provider
    this.country = country
    this.httpService.getNewsApi(country)
      .then(data => {
        this.news = data;
        this.news = this.news.articles;
        //console.log(this.news);
      });
  }

  async visit(url): Promise<any> {
    console.log(url)
    await Browser.open({ url: url });
  }

}
