import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Comment } from '../../Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onDeleteComment: EventEmitter<Comment> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(comment) {
    this.onDeleteComment.emit(comment);
  }
}
