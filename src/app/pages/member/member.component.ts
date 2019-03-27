import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CvModel } from '../../model/cv.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  // private itemsCollection: AngularFirestoreCollection<CvModel>;
  // members: Observable<CvModel[]>;
  // constructor(private afs: AngularFirestore) {
  //   this.itemsCollection = afs.collection<CvModel>('profiles');
  //   this.members = this.itemsCollection.valueChanges();
  // }
  public memberName: string;
  public documentPath = 'profiles/alejandro';
  private itemDoc: AngularFirestoreDocument<CvModel>;
  member: Observable<CvModel>;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
    this.memberName = this.route.snapshot.paramMap.get('profile');
    if (this.memberName !== 'alejandro') {
      this.documentPath = 'profiles/nora';
    }
    this.itemDoc = afs.doc<CvModel>(this.documentPath);
    this.member = this.itemDoc.valueChanges();
  }
  update(member: CvModel) {
    this.itemDoc.update(member);
  }

  ngOnInit() {}
}
