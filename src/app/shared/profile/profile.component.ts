import { Component, Input } from '@angular/core';

import { CvModel } from '../../model/cv.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() memberProfile: CvModel;

  social = [
    {
      icon: 'mamutlove-icon-linkedin',
      title: 'My profile at Linkedin',
      url: 'https://www.linkedin.com/in/alejandromur',
    },
    {
      icon: 'mamutlove-icon-mail',
      title: 'Email me at alejandro@mamutlove.es',
      url: 'mailto:alejandro@mamutlove.es',
    },
    {
      icon: 'mamutlove-icon-github',
      title: 'My profile at GitHub',
      url: 'https://github.com/alejandromur',
    },
    {
      icon: 'mamutlove-icon-codepen',
      title: 'My profile at Codepen',
      url: 'https://codepen.io/alejandromur/',
    },
    {
      icon: 'mamutlove-icon-twitter',
      title: 'My profile at Twitter',
      url: 'https://twitter.com/alejandro_mur',
    },
  ];

  constructor() {}
}
