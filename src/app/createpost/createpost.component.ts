import { Component, OnInit } from '@angular/core';
import { PostService } from '../auth/services/post.service';
import { Post } from '../auth/models/post.model';
import { Router } from '@angular/router';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  constructor(private postSvc: PostService, private router: Router) {}
  newPost: Post;
  content: string = '';
  title: string = '';
  headerImage: string = '';
  errorMsg = '';
  ngOnInit(): void {
    this.newPost = new Post();
  }

  CreateNewPost() {
    this.newPost.content = this.content;
    this.newPost.title = this.title;
    this.newPost.headerImage = this.headerImage;
    this.postSvc.CreateNewPost(this.newPost).subscribe(
      (returnedPost) => {
        this.router.navigate(['/home']);
        this.errorMsg = '';
      },
      (error) => {
        console.log(error);
        this.errorMsg = error.error.messsage;
      }
    );
  }
}
