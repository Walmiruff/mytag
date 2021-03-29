import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit {

  public list: Observable<any>;

  constructor(
    private firestoreService: FirestoreService
  ) {
    // get item listing
    this.list = this.firestoreService.getItemList().valueChanges()

  }

  ngOnInit() {
  }

}