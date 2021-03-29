import { Component, OnInit } from '@angular/core';
import {TripsService} from '../../services/trips.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


// import {MenuComponent} from '../../components/menu/menu.component';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {
  public trips: any;

  constructor(private route: ActivatedRoute, public router: Router, public tripService: TripsService, private menu: MenuController) {
    this.trips = tripService.getAll();
  }


  // view trip detail
  ionViewWillEnter(id) {
    // this.router.push(['trip-detail'], {id: id});
    this.router.navigate(['trip-detail/', {id: id,  foo: 'foo'}], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
