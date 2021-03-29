import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../services/profile-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-store',
  templateUrl: './profile-store.page.html',
  styleUrls: ['./profile-store.page.scss'],
})
export class ProfileStorePage implements OnInit {
  private store: any;
  images: any;


  constructor(public storeService: ProfileStoreService, public router: Router) {
    this.store = storeService.getItem(1);
  }

  ngOnInit() {
  }

  buyClient() {
    this.router.navigate(['buy-client']);
  }
}
