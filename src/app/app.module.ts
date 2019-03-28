import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { MemberService } from './services/members.service';

// Components
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './shared/profile/profile.component';

// Pages
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MamutComponent } from './pages/mamut/mamut.component';
import { MemberComponent } from './pages/member/member.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsListComponent } from './pages/postsList/postsList.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ProfileComponent,
    NotFoundComponent,
    MamutComponent,
    MemberComponent,
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
  providers: [MemberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
