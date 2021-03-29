import {Injectable} from '@angular/core';
import {TRIPS} from './mock-trip.service';

@Injectable({
    providedIn: 'root'
})
export class TripsService {
    private trips: any;

    constructor() {
        this.trips = TRIPS;
    }

    getAll() {
        return this.trips;
    }

    getItem(id) {
        return this.trips.find(trips => trips.id === id);
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
        this.trips.splice(this.trips.indexOf(item), 1);
    }
}
