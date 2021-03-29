import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LoadingController, ToastController, ActionSheetController } from '@ionic/angular';


const { Clipboard } = Plugins;

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  base64Image: string;
  public testMessage  : any;
  public copiedMessage: any;

  constructor(
    public toastCtrl: ToastController,
  ) {
    this.testMessage = "Test message."
   
  }

  ngOnInit() {
  }

  copyToClipboard() {
    let msg = this.testMessage;
    Clipboard.write({
      string: msg
    });
    console.log("copied")
    this.toastMsg(msg + ' copied to clipboard');
  }

  copyURL() {
    let msg = location.href;
    Clipboard.write({
      string: msg
    });
    console.log("copied")
    this.toastMsg(msg + '  copied to clipboard');
  }

  async readFromClipboard() {
    try {
      //let str = await Clipboard.read({type: "string"});
      await Clipboard.read({type: "string"}).then(text => {
        console.log('Pasted text: ', text);
        this.copiedMessage = text;
      });
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  }

  async toastMsg(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 500,
      position: 'bottom',
      color: 'secondary'
    });
    toast.present();
  }

}
