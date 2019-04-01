import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MamutComponent } from './pages/mamut/mamut.component';
import { MemberComponent } from './pages/member/member.component';
import { PostsListComponent } from './pages/postsList/postsList.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: 'mamut',
    component: MamutComponent,
  },
  {
    path: 'mamut/:profile',
    component: MemberComponent,
  },
  // {
  //   path: 'portfolio',
  //   component: ProjectComponent,
  // },
  {
    path: 'blog',
    component: PostsListComponent,
  },
  {
    path: 'blog/:id',
    component: PostComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mamut',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
