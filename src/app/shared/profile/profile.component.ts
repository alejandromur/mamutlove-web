import { Component, Input } from '@angular/core';

import { CvModel } from '../../model/cv.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() memberProfile: CvModel;

  constructor() {}
}
