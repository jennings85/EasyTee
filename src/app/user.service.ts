import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/user.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User){
    return this.firestore.collection('users').add(user);
  }

  deleteUser(user: User) {
    return this.firestore.doc('users').delete();
  }

}
