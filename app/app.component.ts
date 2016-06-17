import { Component } from 'angular2/core';
import { CourseComponent } from './courses.component';
import { AuthorComponent } from './authors.component';
import { ThumbsUpComponent } from './thumbsup.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';

@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <div class="jumbotron">
          <h1>ng2tut1: Learning Angular 2</h1>
        </div>
        <courses>
        </courses>
        <authors>
        </authors>
        <thumbsup [toggle]="post.up"
          (change)="onToggleChange($event)">
        </thumbsup>
        <like [liked]="post.like" [count]="post.count">
        </like>
        <votes [votes]="post.votes" [userVote]="post.userVote" (vote)="updateVote($event)">
        </votes>
      </div>`,
    directives: [CourseComponent,
                AuthorComponent,
                ThumbsUpComponent,
                LikeComponent,
                VoteComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    up: false,
    like: false,
    count: 50,
    votes: 34,
    userVote: 0
  }

  onToggleChange($event) {
    console.log($event);
  }

  updateVote($event){
    console.log($event);
    console.log(this.post)
    this.post.votes = parseInt($event.votes);
  }
}
