import { Component,  OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;


@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.page.html',
  styleUrls: ['./pwa.page.scss'],
})
export class PwaPage implements OnInit {
  showBtn: boolean = false;
  deferredPrompt;
  device : any;
  
  constructor() { 
  }

  ngOnInit() {
    var divBrowser = document.getElementById("browser");
    var divApp = document.getElementById("app");

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
      divApp.style.display = 'block';
      divBrowser.style.display = 'none';
    } else {
      console.log('display-mode is browser');
      divApp.style.display = 'none';
      divBrowser.style.display = 'block';
    }

    // chk if installed
    window.addEventListener('appinstalled', (event) => {
      console.log('installed');
     });
  }

  ionViewWillEnter(){
    console.log("VIEW");
    window.addEventListener('beforeinstallprompt', (e) => {

      console.log("B4 INSTALLED");
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
       
    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });
     
    //button click event to show the promt
             
    window.addEventListener('appinstalled', (event) => {
      console.log("Apps Installed " + event);
      //alert('installed');
    });
     
    //console.log("APP " + window.navigator.appName)
    //console.log("GEO " + window.navigator.geolocation.getCurrentPosition)
    //navigator.geolocation.getCurrentPosition(this.showPosition)
  }
 
  //showPosition(position){
  //  console.log(position.coords.latitue)
  //}

  add_to_home(e){
    console.log("Btn Clicked");
    // debugger
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log("User accepted the prompt");
        } else {
          console.log("User dismissed the prompt");
        }
        this.deferredPrompt = null;
      });
  };

  // open url in InAppBrowser or tab
  async visit(url): Promise<any> {
    console.log(url)
    await Browser.open({ url: url });
  }
  
  
}
