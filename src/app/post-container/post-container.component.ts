import { Component, OnInit } from '@angular/core';
import { PostService } from '../auth/services/post.service';
import { Post } from '../auth/models/post.model';
import { Returnpost } from '../auth/models/returnpost.model';
import { Router } from '@angular/router';
import alasql from 'alasql';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  constructor(private postSvc: PostService, private router: Router) {}
  errorMsg = '';
  currentUserId: string = '';
  postArr = [];
  returnPostArr = [];
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postSvc.getPosts().subscribe(
      (returnedPosts) => {
        this.errorMsg = '';

        console.log(returnedPosts);
        this.postArr = alasql('SELECT * FROM ? ORDER BY lastUpdated desc', [
          returnedPosts,
        ]);
        console.log(this.postArr);
        this.generatePosts();
      },
      (error) => {
        this.errorMsg = error.error.messsage;
      }
    );
  }

  generatePosts() {
    if (localStorage.getItem('userId') !== null) {
      this.currentUserId = localStorage.getItem('userId');
    }
    this.postArr.forEach((element) => {
      let returnpost = new Returnpost();
      (returnpost.title = element['title']),
        (returnpost.content = element['content']),
        (returnpost.headerImage = element['headerImage']),
        (returnpost.lastUpdated = element['lastUpdated'].split('T', '1')),
        (returnpost.postId = element['postId']),
        (returnpost.userId = element['userId']),
        (returnpost.currentUserBoolean = this.checkUser(returnpost.userId));
      this.returnPostArr.push(returnpost);
    });
    console.log(this.returnPostArr);
  }

  checkUser(postUserId: string) {
    console.log(this.currentUserId);
    console.log(postUserId);
    if (this.currentUserId === postUserId) {
      return true;
    }
    return false;
  }
}
