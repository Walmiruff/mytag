import { Injectable } from '@angular/core';
import {CATEGORY} from './mock-category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: any;

  constructor() {
    this.categories = CATEGORY;
  }

  getAll() {
    return this.categories;
  }

  getItem(id) {
    return this.categories.find(category => category.id === id);
  }

  // getItem(id) {
  //     for (var i = 0; i < this.trips.length; i++) {
  //         if (this.trips[i].id === parseInt(id)) {
  //             return this.trips[i];
  //         }
  //     }
  //     return null;
  // }

  remove(item) {
    this.categories.splice(this.categories.indexOf(item), 1);
  }
}
