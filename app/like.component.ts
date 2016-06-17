import { Component, Input } from 'angular2/core';

@Component({

  selector: 'like',
  template: `<span class="mega-octicon octicon-flame"
                  [class.liked]="liked"
                  (click)="onClick()"
            ></span><span>{{count}}</span>`,
  styles: [`
    .liked {
      color: red;
    }
    .mega-octicon {
      cursor: pointer;
    }
    `]
})

export class LikeComponent {

  @Input() count: number = 14;

  @Input() liked: boolean = false;

  onClick() {
    if(!this.liked){
      this.count++;
    }else{
      this.count--;
    }
    this.liked = !this.liked;
  }
}
