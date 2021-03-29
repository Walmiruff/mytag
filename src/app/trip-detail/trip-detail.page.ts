import { Component, OnInit } from '@angular/core';
import {TripsService} from '../services/trips.service';
// import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {
  private trips;
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;
  buttonText: any;

  constructor(private router: Router, public tripService: TripsService) {
    // set sample data
    this.trip = tripService.getItem(1);

    // Button back
    this.buttonText = 'Voltar';
  }

  // ionViewWillEnter(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.trips = this.tripService.getItem(id);
  // }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }
  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }
  // minus children when click minus button
  minusChildren() {
    this.children--;
  }
  // plus children when click plus button
  plusChildren() {
    this.children++;
  }
  // go to checkout page
  // checkout() {
  //   this.nav.push(CheckoutTripPage);
  // }


  ngOnInit() {
  }

  author() {
    this.router.navigate(['profile-store']);
  }
}
