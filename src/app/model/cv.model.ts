import { SocialModel } from './social.model';
// import { ExperienceModel } from './experience.model';
// import { TrainingModel } from './training.model';
// import { SkillsModel } from './skills.model';
// import { LanguagesModel } from './languages.model';
// import { InteresetsModel } from './interests.model';

export class CvModel {
  id: number;
  name: string;
  surname: string;
  role: string;
  image: string;
  social: SocialModel[];
  // experience: ExperienceModel[];
  // training: TrainingModel[];
  // skills: SkillsModel[];
  // languages: LanguagesModel[];
  // interests: InteresetsModel[];
}
