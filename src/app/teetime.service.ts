import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Teetime } from 'src/app/teetime.model';

@Injectable({
  providedIn: 'root'
})
export class TeetimeService {

  constructor(private firestore: AngularFirestore) { }

  getTimes() {
    return this.firestore.collection('teetimes').snapshotChanges();
  }

  createTeeTime(teetime: Teetime){
    return this.firestore.collection('teetimes').add(teetime);
  }
}
