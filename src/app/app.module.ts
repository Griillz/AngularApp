import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './auth/services/user.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { PostComponent } from './post/post.component';
import { PostContainerComponent } from './post-container/post-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewUserComponent,
    LoginComponent,
    HomeComponent,
    SecretComponent,
    CreatepostComponent,
    PostComponent,
    PostContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
