import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../auth/models/post.model';
import { PostService } from '../auth/services/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss'],
})
export class EditpostComponent implements OnInit {
  postId: string = '';
  content: string = '';
  title: string = '';
  headerImage: string = '';
  errorMsg: string = '';
  currentPost: Post = new Post();
  constructor(
    private postSvc: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
  }

  UpdatePost() {
    this.currentPost.headerImage = this.headerImage;
    this.currentPost.content = this.content;
    this.currentPost.title = this.title;
    this.postSvc.UpdatePost(this.currentPost, this.postId).subscribe(
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
