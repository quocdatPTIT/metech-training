import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { Post } from "./interfaces/posts.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://ngrx-6c38d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({...data[key], id: key})
          };
          return posts;
        }),
      );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://ngrx-6c38d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
      post
    );
  }

  updatePost(post: Post) {
    const postData = {
      [post.id as string]: { title: post.title, description: post.description },
    };

    return this.http.patch<Post>(
      `https://ngrx-6c38d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
      postData
    );
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(
      `https://ngrx-6c38d-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
    );
  }
}