import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => (this.comments = comments));
  }

  deleteComment(comment: Comment) {
    this.commentService
      .deleteComment(comment)
      .subscribe(
        () => (this.comments = this.comments.filter((t) => t.id !== comment.id))
      );
  }


  addComment(comment: Comment) {
    this.commentService.addComment(comment).subscribe((comment) => this.comments.push(this.comments));
  }
}
