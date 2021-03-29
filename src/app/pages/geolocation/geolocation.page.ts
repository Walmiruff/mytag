import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

// Use Service Http Provider - src/app/services/http.service.ts
import { HttpService } from '../../services/http.service';

const { Geolocation } = Plugins;
const { Browser } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})

export class GeolocationPage implements OnInit {

  latitude : number;
  longitude: number;
  accuracy : number;
  altitude : number;
  heading  : number;
  speed    : number;

  public map : any;
  public location : any;
  public address : any;
  public nearby : any;

  constructor(
    private alertController: AlertController,
    private httpService: HttpService,
  ) {

  }

  ngOnInit() {
    this.getLocation()
  }

  async getLocation() {
    const loc = await Geolocation.getCurrentPosition();
    this.latitude  = loc.coords.latitude;
    this.longitude = loc.coords.longitude;
    this.accuracy  = loc.coords.accuracy;
    this.altitude  = loc.coords.altitude;
  
    this.getMapLocation(this.latitude,this.longitude)
    //this.getNearby(this.latitude,this.longitude)
  }

  async visitMap(lat,lng): Promise<any> {
    //const url = 'http://maps.google.com/maps?geo:' + lat + ',' + lng ;
    const url = 'http://maps.google.com/maps?geo:' + lat + ',' + lng ;
    console.log(url)
    await Browser.open({ url: url });
  }

  getMapLocation(lat,lng) {
    // get data from Http Service Provider
    this.httpService.getMapLocation(lat,lng)
      .then(data => {
        this.map = data;
        //console.log(this.map);
        this.location = this.map.plus_code;
        this.address  = this.map.results;
        //console.log(this.map)
      });
  }

  getNearby(lat,lng) {
    // get data from Http Service Provider
    this.httpService.getNearby(lat,lng)
      .then(data => {
        this.nearby = data;
        console.log(this.nearby);
      });
  }

}