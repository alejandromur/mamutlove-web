import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsListComponent } from './pages/blog/postsList/postsList.component';
import { PostComponent } from './pages/blog/post/post.component';

const routes: Routes = [
  // {
  //   path: 'mamut',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'portfolio',
  //   component: ProjectComponent,
  // },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: 'posts',
        component: PostsListComponent,
      },
      {
        path: 'posts/:id',
        component: PostComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog',
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
