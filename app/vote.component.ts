import { Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'votes',
  template: `
    <div class="row small" (click)="onClick()">
      <div class="mega-octicon octicon-chevron-up"
            [class.highlight]="isUp()"
            (click)="onUp()"></div>
      <span>{{votes}}</span>
      <div class="mega-octicon octicon-chevron-down"
            [class.highlight]="isDown()"
            (click)="onDown()"></div>
    </div>`,
  styles: [`
      .small{
        width: 36px;
      }

      .highlight {
        color: orange;
      }`]

})

export class VoteComponent {

  @Input() votes: number = 1;
  @Input() userVote: number = 0;
  @Output() vote = new EventEmitter();

  onClick(){
    this.vote.emit({vote: this.votes});
  }

  isUp() {
    return this.userVote > 0 ;
  }

  isDown() {
    return this.userVote < 0 ;
  }

  onUp() {
    if(this.userVote < 1) {
      this.votes++;
      this.userVote++;
    }
  }

  onDown() {
    if(this.userVote > -1) {
      this.votes--;
      this.userVote--;
    }
  }
}
// <div class="row">
//   <span  class="mega-octicon"
//         [class.octicon-chevron-up]="upVoted"
//         ></span>
//   <div >{{votes}}</div>
//   <div class="mega-octicon"
//         [class.octicon-chevron-down]="downVoted"
//         ></div>
// </div>`
