import { Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'thumbsup',
  template:`
    <span class="mega-octicon"
        [class.octicon-thumbsdown]="!toggle"
        [class.octicon-thumbsup]="toggle"
        (click)="onClick()"
    > </span>`,
  styles: [`
    .mega-octicon {
      color: green;
    }
    `]
})

export class ThumbsUpComponent {

  @Input() toggle: boolean = false;

  @Output() change = new EventEmitter();

  onClick(){
    this.toggle = !this.toggle;
    this.change.emit({newValue: this.toggle});
  }


    // glyphClass() {
    //   if(this.toggle === true){
    //     return "glyphicon glyphicon-star";
    //   }
    //   return "glyphicon glyphicon-star-empty";
    // }

}
