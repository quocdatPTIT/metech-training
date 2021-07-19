import { Post } from './interfaces/posts.interface';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import {MessageService} from "primeng/api";
import {ToastServerity} from "../enums/toast.enum";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService, private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.authService.login('datsieunhan16@gmail.com', 'Dat10051998@@').subscribe(
      (res) => console.log(res)
    );
    this.postService.getPosts().subscribe(
      (res) => console.log(res)
    );

    const newPosts: Post = {
      description: 'Hnay thu 7',
      title: 'Tieu de test'
    };

    this.postService.addPost(newPosts).subscribe(
      (res) => {
        this.messageService.add({ severity: ToastServerity.SUCCESS, summary: 'Thành công', detail: 'Lưu thành công' });
      }
    );
  }

}
