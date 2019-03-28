import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { CvModel } from '../../model/cv.model';
import { MemberService } from '../../services/members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  constructor(private ms: MemberService, private route: ActivatedRoute) {}

  // Retrieve a Collection
  // members: Observable<CvModel[]>;
  // public collection = 'profiles';
  // async ngOnInit() {
  //   this.members = await this.ms.getMembers(this.collection);
  // }

  // Retrieve a Document
  public memberName: string;
  public document = 'profiles/alejandro';
  member: Observable<CvModel>;

  async ngOnInit() {
    this.memberName = this.route.snapshot.paramMap.get('profile');
    if (this.memberName !== 'alejandro') {
      this.document = 'profiles/nora';
    }
    this.member = await this.ms.getMember(this.document);
  }
}
