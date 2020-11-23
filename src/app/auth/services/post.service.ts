import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { ApiToken } from '../models/token.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL = 'https://unf.josecgomez.dev';
  constructor(private http: HttpClient) {}

  CreateNewPost(newPost: Post) {
    let token = JSON.parse(localStorage.getItem('Auth')).token;
    const headers = { Authorization: 'Bearer ' + token };
    return this.http.post<Post>(`${this.BASE_URL}/Posts`, newPost, {
      headers: headers,
    });
  }

  getPosts() {
    return this.http.get(`${this.BASE_URL}/Posts`);
  }
}
