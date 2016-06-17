System.register(['angular2/core', './courses.component', './authors.component', './thumbsup.component', './like.component', './vote.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, thumbsup_component_1, like_component_1, vote_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (thumbsup_component_1_1) {
                thumbsup_component_1 = thumbsup_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        up: false,
                        like: false,
                        count: 50,
                        votes: 34,
                        userVote: 0
                    };
                }
                AppComponent.prototype.onToggleChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.updateVote = function ($event) {
                    console.log($event);
                    console.log(this.post);
                    this.post.votes = parseInt($event.votes);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"container\">\n        <div class=\"jumbotron\">\n          <h1>ng2tut1: Learning Angular 2</h1>\n        </div>\n        <courses>\n        </courses>\n        <authors>\n        </authors>\n        <thumbsup [toggle]=\"post.up\"\n          (change)=\"onToggleChange($event)\">\n        </thumbsup>\n        <like [liked]=\"post.like\" [count]=\"post.count\">\n        </like>\n        <votes [votes]=\"post.votes\" [userVote]=\"post.userVote\" (vote)=\"updateVote($event)\">\n        </votes>\n      </div>",
                        directives: [courses_component_1.CourseComponent,
                            authors_component_1.AuthorComponent,
                            thumbsup_component_1.ThumbsUpComponent,
                            like_component_1.LikeComponent,
                            vote_component_1.VoteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map