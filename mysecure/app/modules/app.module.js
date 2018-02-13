"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var livepreview_component_1 = require("./livepreview/livepreview.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var aboutlocker_component_1 = require("./aboutlocker/aboutlocker.component");
var feedback_component_1 = require("./feedback/feedback.component");
var accountsettings_component_1 = require("./accountsettings/accountsettings.component");
var newconnection_component_1 = require("./newconnection/newconnection.component");
var ratethisapp_component_1 = require("./ratethisapp/ratethisapp.component");
var users_component_1 = require("./users/users.component");
var http_1 = require("nativescript-angular/http");
var shared_1 = require("./shared");
var app_service_1 = require("../app.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                app_service_1.ActivityService
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                shared_1.SharedModule,
                http_1.NativeScriptHttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                contact_component_1.ContactComponent,
                livepreview_component_1.LivePreviewComponent,
                about_component_1.AboutComponent,
                aboutlocker_component_1.AboutlockerComponent,
                feedback_component_1.FeedbackComponent,
                accountsettings_component_1.AccountsettingsComponent,
                newconnection_component_1.NewconnectionComponent,
                ratethisapp_component_1.RatethisappComponent,
                users_component_1.UsersComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsNkVBQTJFO0FBQzNFLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLG9FQUFrRTtBQUNsRSx5RkFBdUY7QUFDdkYsbUZBQWlGO0FBQ2pGLDZFQUEyRTtBQUMzRSwyREFBeUQ7QUFDekQsa0RBQW1FO0FBQ25FLG1DQUF3QztBQUN4Qyw4Q0FBaUQ7QUEwQmpEO0lBQUE7SUFFQSxDQUFDO0lBRlksU0FBUztRQXhCckIsZUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFO2dCQUNULDZCQUFlO2FBQ2xCO1lBQ0MsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixxQkFBWTtnQkFDWiw2QkFBc0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osb0NBQWdCO2dCQUNoQiw0Q0FBb0I7Z0JBQ3BCLGdDQUFjO2dCQUNkLDRDQUFvQjtnQkFDcEIsc0NBQWlCO2dCQUNqQixvREFBd0I7Z0JBQ3hCLGdEQUFzQjtnQkFDdEIsNENBQW9CO2dCQUNwQixnQ0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUVyQjtJQUFELGdCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXZlUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGl2ZXByZXZpZXcvbGl2ZXByZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dGxvY2tlckNvbXBvbmVudCB9IGZyb20gJy4vYWJvdXRsb2NrZXIvYWJvdXRsb2NrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vYWNjb3VudHNldHRpbmdzL2FjY291bnRzZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdjb25uZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXdjb25uZWN0aW9uL25ld2Nvbm5lY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0ZXRoaXNhcHBDb21wb25lbnQgfSBmcm9tICcuL3JhdGV0aGlzYXBwL3JhdGV0aGlzYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eVNlcnZpY2UgfSBmcm9tIFwiLi4vYXBwLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBY3Rpdml0eVNlcnZpY2VcclxuXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBDb250YWN0Q29tcG9uZW50LFxyXG4gICAgTGl2ZVByZXZpZXdDb21wb25lbnQsXHJcbiAgICBBYm91dENvbXBvbmVudCxcclxuICAgIEFib3V0bG9ja2VyQ29tcG9uZW50LFxyXG4gICAgRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBBY2NvdW50c2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICBOZXdjb25uZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgUmF0ZXRoaXNhcHBDb21wb25lbnQsXHJcbiAgICBVc2Vyc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuIl19