import { Component, OnInit } from '@angular/core';
import { Plugins, ShareOptions } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

const { Share } = Plugins;
const { Device } = Plugins;

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  public deviceInfo: any;
  public devicePlatform: any;
  public options: ShareOptions;

  constructor(
    private toastController: ToastController
  ) {

  }

  ngOnInit() {
    document.getElementById("noshare").style.display = "none";

    Share.share(this.options).catch(err => {
      document.getElementById("fab").style.display = "none";
      document.getElementById("share").style.display = "none";
      document.getElementById("noshare").style.display = "block";
      console.log("ERROR " + err);
    });
  

    this.chkDevice()
  }

  async chkDevice(): Promise<any> {
    const info = await Device.getInfo();
    this.deviceInfo = info;

  }

  async share(): Promise<any> {
    let ok = false;
    try {
      await Share.share({
        title: 'Ionic 4 PWA with Firebase and Capacitor',
        text: 'A fully functional Ionic 4 PWA apps, complete with authentication system, and also CRUD samples using both Firebase Realtime Database and Firestore.',
        url: 'https://ionic-pwa-template.firebaseapp.com',
        dialogTitle: 'Share with your friends'
      });
      ok = true;
    } catch (error) {
      if (ok == false) {
        console.log("ERROR " + error);
        //this.errorMsg(error);
      }
    };
  }

  async errorMsg(err) {
    const toast = await this.toastController.create({
      message: err + '. Please try using another mobile browser',
      duration: 2000,
      position: 'top',
      color: 'primary',
      showCloseButton: true,
      closeButtonText: 'Done'
    });
    toast.present();
  }

}
