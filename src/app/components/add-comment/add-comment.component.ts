import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  @Output() onAddComment: EventEmitter<Comment> = new EventEmitter();
  text: string;
  showAddComment: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddComment = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.text) {
      alert('Please add a comment!');
      return;
    }

    const newComment: Comment = {
      text: this.text,
    };

    this.onAddComment.emit(newComment);

    this.text = '';
  }
}
