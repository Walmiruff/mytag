import { Injectable } from '@angular/core';
import { STORE } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileStoreService {
  private store: any;

  constructor() {
    this.store = STORE;
  }
  getAll() {
    return this.store;
  }

  getItem(id) {
    return this.store.find(trips => trips.id === id);
  }

  remove(item) {
    this.store.splice(this.store.indexOf(item), 1);
  }

}
