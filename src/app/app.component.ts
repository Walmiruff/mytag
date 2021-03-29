import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home-client',
      icon: 'home'
    },
    {
      title: 'Get Started',
      url: '/getstarted',
      icon: 'md-construct'
    },

  ];

  public ionicPages = [
    {
      title: 'Authentication',
      url: '/member',
      icon: 'person'
    },
    {
      title: 'Cloud Firestore',
      url: '/firestore',
      icon: 'list'
    },
    {
      title: 'HttpClient',
      url: '/httpclient',
      icon: 'list'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'map'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'logo-buffer'
    },
    {
      title: 'PWA',
      url: '/pwa',
      icon: 'logo-buffer'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'browsers'
    },
    {
      title: 'Share',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'copy'
    },
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
