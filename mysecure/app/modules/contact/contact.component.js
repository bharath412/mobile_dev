"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../../app.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var ContactComponent = /** @class */ (function () {
    function ContactComponent(activityService) {
        this.activityService = activityService;
        this.text = 'Contact Page';
        this.tabSelectedIndex = 1;
    }
    ContactComponent.prototype.changeTab = function () {
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
    ContactComponent.prototype.ngOnInit = function () {
        this.activities$ = this.activityService.getActivities();
    };
    ContactComponent.prototype.refreshList = function (args) {
        var pullRefresh = args.object;
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: 'modules/contact/contact.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [app_service_1.ActivityService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUkxRSxpREFBb0Q7QUFDcEQsMEVBQXdFO0FBRXhFLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVU1RjtJQU1JLDBCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMcEQsU0FBSSxHQUFXLGNBQWMsQ0FBQztRQU8xQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBSTdCLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUk1RCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFVBQVUsQ0FBQztZQUNSLFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFuQ1MsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7eUNBT3VDLDZCQUFlO09BTjNDLGdCQUFnQixDQW9DNUI7SUFBRCx1QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2FwcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJQdWxsVG9SZWZyZXNoXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB0ZXh0OiBzdHJpbmcgPSAnQ29udGFjdCBQYWdlJztcblxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIGFjdGl2aXRpZXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlTZXJ2aWNlKSB7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgICAgICBcblxuICAgICAgIFxuICAgICB9XG4gICAgXG4gICAgIGNoYW5nZVRhYigpIHtcbiAgICAgICAgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFjdGl2aXRpZXMkID0gdGhpcy5hY3Rpdml0eVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpO1xuXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICByZWZyZXNoTGlzdChhcmdzKSB7XG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgIH1cbn0iXX0=