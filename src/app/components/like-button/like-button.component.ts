import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent {
  numberOfLikes: number = 100;
  isLiked: boolean = false;

  //Create a method that toggles the like flag that adds or removes class list
  likeClicked() {
    if (!this.isLiked) {
      this.numberOfLikes += 1;
      this.isLiked = true;
    } else {
      this.numberOfLikes -= 1;
      this.isLiked = false;
    }
  }
}
