import { Component } from 'angular2/core';
import { CourseComponent } from './courses.component';
import { AuthorComponent } from './authors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>ng2tut1: Learning Angular 2</h1>
        <courses>
        </courses>
        <authors>
        </authors>
        <h2>Star Component</h2>

        <span [class.mega-octicon] = "true"
              [class.octicon-thumbsdown]="!toggle"
              [class.octicon-thumbsup]="toggle"
              (click)="onClick()"
        > </span>`,
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent {


  toggle: boolean = false;


  // glyphClass() {
  //   if(this.toggle === true){
  //     return "glyphicon glyphicon-star";
  //   }
  //   return "glyphicon glyphicon-star-empty";
  // }

  onClick(){
    this.toggle = !this.toggle;
  }


}
