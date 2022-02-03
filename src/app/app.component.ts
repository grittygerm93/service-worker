import { Component } from '@angular/core';
import {Post} from "./post/post.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
