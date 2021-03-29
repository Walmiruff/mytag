import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public LoggedIn: any;
  public currUser: any;
  public userProfile: AngularFirestoreDocument<any>;
  public userId: any;

  private itemDoc: AngularFirestoreDocument<any>;
  private itemList: AngularFirestoreCollection<any>;

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,


  ) {

    afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.LoggedIn = true;
        this.currUser = user;
        this.userId = user.uid
        this.userProfile = this.firestore.doc(`/userProfile/${user.uid}`)

      } else {
        this.LoggedIn = false;
        this.currUser = null;
        this.userProfile = null;
      }
    });
  }

  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  getProfile() {
    if (this.LoggedIn) {
      return this.userProfile;
    } else {
      console.log("Not Login")
    }
  }

  getUserProfile() {
    return this.itemDoc = this.firestore.doc<any>(`/userProfile/` + this.userId);
  }

  anonymousLogin(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInAnonymously();
  }

  loginUser(newEmail: string, newPassword: string):
    Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  // FACEBOOK LOGIN
  fbLogin(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(newUserCredential => {
        this.currUser = newUserCredential;
        const email = newUserCredential.user.providerData[0].email;
        const name = newUserCredential.user.displayName;
        const photo = newUserCredential.user.photoURL + '?height=200';
        const phone = newUserCredential.user.phoneNumber;
        const uid = newUserCredential.user.uid;
        const provider = 'facebook';

        console.log(photo);
        return this.firestore.doc(`/userProfile/${newUserCredential.user.uid}`)
          .update({ email, name, photo, phone, uid, provider })
          .then(() => {

          })
          .catch((error) => {
            return this.firestore.doc(`/userProfile/${newUserCredential.user.uid}`)
              .set({ email, name, photo, phone, uid, provider })
          });
      });
  }

  // GOOGLE LOGIN
  googleLogin(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(newUserCredential => {
        this.currUser = newUserCredential;
        const email = newUserCredential.user.providerData[0].email;
        const name = newUserCredential.user.displayName;
        const photo = newUserCredential.user.photoURL;
        const phone = newUserCredential.user.phoneNumber;
        const uid = newUserCredential.user.uid;
        const provider = 'google';
        return this.firestore.doc(`/userProfile/${newUserCredential.user.uid}`)
          .update({ email, name, photo, phone, uid, provider })
          .then(() => {

          })
          .catch((error) => {
            return this.firestore.doc(`/userProfile/${newUserCredential.user.uid}`)
              .set({ email, name, photo, phone, uid, provider })
          });

      });
  }

  // LOGOUT
  logoutUser(): Promise<void> {
    this.currUser = null;
    return this.afAuth.auth.signOut();
  }


}
