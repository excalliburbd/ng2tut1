System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.votes = 1;
                    this.userVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onClick = function () {
                    this.vote.emit({ vote: this.votes });
                };
                VoteComponent.prototype.isUp = function () {
                    return this.userVote > 0;
                };
                VoteComponent.prototype.isDown = function () {
                    return this.userVote < 0;
                };
                VoteComponent.prototype.onUp = function () {
                    if (this.userVote < 1) {
                        this.votes++;
                        this.userVote++;
                    }
                };
                VoteComponent.prototype.onDown = function () {
                    if (this.userVote > -1) {
                        this.votes--;
                        this.userVote--;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "votes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "userVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'votes',
                        template: "\n    <div class=\"row small\" (click)=\"onClick()\">\n      <div class=\"mega-octicon octicon-chevron-up\"\n            [class.highlight]=\"isUp()\"\n            (click)=\"onUp()\"></div>\n      <span>{{votes}}</span>\n      <div class=\"mega-octicon octicon-chevron-down\"\n            [class.highlight]=\"isDown()\"\n            (click)=\"onDown()\"></div>\n    </div>",
                        styles: ["\n      .small{\n        width: 36px;\n      }\n\n      .highlight {\n        color: orange;\n      }"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
// <div class="row">
//   <span  class="mega-octicon"
//         [class.octicon-chevron-up]="upVoted"
//         ></span>
//   <div >{{votes}}</div>
//   <div class="mega-octicon"
//         [class.octicon-chevron-down]="downVoted"
//         ></div>
// </div>`
//# sourceMappingURL=vote.component.js.map