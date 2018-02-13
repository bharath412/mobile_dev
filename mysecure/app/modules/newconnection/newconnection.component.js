"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewconnectionComponent = /** @class */ (function () {
    function NewconnectionComponent() {
        this.text = 'newconnection';
        this.tabSelectedIndex = 1;
    }
    NewconnectionComponent.prototype.changeTab = function () {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        }
        else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        }
        else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    };
    NewconnectionComponent = __decorate([
        core_1.Component({
            selector: 'newconnection',
            templateUrl: 'modules/newconnection/newconnection.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], NewconnectionComponent);
    return NewconnectionComponent;
}());
exports.NewconnectionComponent = NewconnectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Y29ubmVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdjb25uZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQU9uRTtJQUtFO1FBSkEsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUszQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBakJVLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOztPQUNXLHNCQUFzQixDQWtCbEM7SUFBRCw2QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmV3Y29ubmVjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9uZXdjb25uZWN0aW9uL25ld2Nvbm5lY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZXdjb25uZWN0aW9uQ29tcG9uZW50IHtcbiAgdGV4dDogc3RyaW5nID0gJ25ld2Nvbm5lY3Rpb24nO1xuXG4gIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XG4gIH1cbiAgXG4gIGNoYW5nZVRhYigpIHtcbiAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDIpIHtcbiAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfVxuICB9XG59XG4iXX0=