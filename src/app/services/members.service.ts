import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CvModel } from '../model/cv.model';

@Injectable()
export class MemberService {
  constructor(private afs: AngularFirestore) {}

  async getMember(document: string) {
    return this.afs.doc<CvModel>(document).valueChanges();
  }

  async getMembers(collection: string) {
    return this.afs.collection<CvModel>(collection).valueChanges();
  }

  // update(member: CvModel) {
  //   this.itemDoc.update(member);
  // }
}
