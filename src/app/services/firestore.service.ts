import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private itemDoc: AngularFirestoreDocument<any>;
  private itemList: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore
  ) {

  }

  // get items, orderby date descending and limit to 10 records
  // this will give us the 10 most current items, based on created/updated time
  getItemList() {
    return this.itemList = this.firestore.collection<any>('items', ref => ref.orderBy('date', 'desc').limit(10));
  }

  // get item 
  getItem(id) {
    return this.itemDoc = this.firestore.doc<any>('/items/' + id);
  }
  // get user
  getUser(id) {
    return this.itemDoc = this.firestore.doc<any>('/users/' + id);
  }


  // Create New Item
  createItem(title: string, message: string): Promise<void> {
    const id = this.firestore.createId();
    const date = new Date();
    return this.firestore.doc(`items/${id}`).set({
      id, date, title, message
    });
  }

  // Update Item
  updateItem(id, title: string, message: string): Promise<void> {
    const date = new Date();
    return this.firestore.doc(`items/${id}`).update({
      date, title, message
    });
  }

  // Delete Item
  deleteItem(id): Promise<void> {
    return this.firestore.doc(`items/${id}`).delete()
      .then(function () {
        console.log("deleted")
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // Create New User
  // createUser(name: string, email: string): Promise<void> {
  //   const id = this.firestore.createId();
  //   const date = new Date();
  //   return this.firestore.doc(`users/${id}`).set({
  //     id, date, name, email
  //   });
  // }

}
