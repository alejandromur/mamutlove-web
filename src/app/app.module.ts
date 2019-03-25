import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MamutComponent } from './pages/mamut/mamut.component';
import { ProfileComponent } from './pages/mamut/profile/profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsListComponent } from './pages/blog/postsList/postsList.component';
import { PostComponent } from './pages/blog/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MamutComponent,
    ProfileComponent,
    BlogComponent,
    PostsListComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
