import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ElementRef, ViewChild } from '@angular/core';
import fixOrientation from 'fix-orientation';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})

export class CameraPage implements OnInit {
  @ViewChild('inputcamera') cameraInput: ElementRef;
  @ViewChild('inputfile') fileInput: ElementRef;

  @ViewChild('imgresult') imgResult: ElementRef;
 
  img = '';

  displayCard() {
    return this.img !== '';
  }
 
  latitude: number;
  longitude: number;
  today: any;
  fileString: any;

  constructor(
  ) {
  }

  ngOnInit() {
    //this.Camera();
    this.getLocation();
  }

  Camera() {
    const element = this.cameraInput.nativeElement as HTMLInputElement;

    element.onchange = () => {

      var reader = new FileReader();
     
      reader.onloadend = (r: any) => {
        // Get base64 file from Camera
        let base64 = r.target.result as string;
       
        // Fix the orientation
        fixOrientation(base64, { image: true }, (fixed: string, image: any) => {
          this.img = fixed;
        });
      };

      this.today = new Date().toISOString()
      reader.readAsDataURL(element.files[0]);
    }
  }

  File() {
    const element = this.fileInput.nativeElement as HTMLInputElement;

    element.onchange = () => {

      var reader = new FileReader();
     
      reader.onloadend = (r: any) => {
        // Get base64 file from Camera
        let base64 = r.target.result as string;
        // Fix the orientation
        fixOrientation(base64, { image: true }, (fixed: string, image: any) => {
          this.img = fixed;
        });
      };

      this.today = new Date().toISOString()
      reader.readAsDataURL(element.files[0]);
    }
  }

  async getLocation() {
    const loc = await Geolocation.getCurrentPosition();
    this.latitude = loc.coords.latitude;
    this.longitude = loc.coords.longitude;
  }

 

}