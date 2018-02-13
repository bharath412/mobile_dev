"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var livepreview_component_1 = require("./livepreview/livepreview.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var aboutlocker_component_1 = require("./aboutlocker/aboutlocker.component");
var feedback_component_1 = require("./feedback/feedback.component");
var accountsettings_component_1 = require("./accountsettings/accountsettings.component");
var newconnection_component_1 = require("./newconnection/newconnection.component");
var ratethisapp_component_1 = require("./ratethisapp/ratethisapp.component");
var users_component_1 = require("./users/users.component");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forRoot([
                    { path: '', component: contact_component_1.ContactComponent },
                    { path: 'livepreview', component: livepreview_component_1.LivePreviewComponent },
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'aboutlocker', component: aboutlocker_component_1.AboutlockerComponent },
                    { path: 'feedback', component: feedback_component_1.FeedbackComponent },
                    { path: 'accountsettings', component: accountsettings_component_1.AccountsettingsComponent },
                    { path: 'newconnection', component: newconnection_component_1.NewconnectionComponent },
                    { path: 'ratethisapp', component: ratethisapp_component_1.RatethisappComponent },
                    { path: 'users', component: users_component_1.UsersComponent }
                ])
            ],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSw2RUFBMkU7QUFDM0UsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCw2RUFBMkU7QUFDM0Usb0VBQWtFO0FBQ2xFLHlGQUF1RjtBQUN2RixtRkFBaUY7QUFDakYsNkVBQTJFO0FBQzNFLDJEQUF5RDtBQWtCekQ7SUFBQTtJQUVBLENBQUM7SUFGWSxnQkFBZ0I7UUFoQjVCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7b0JBQy9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7b0JBQ3pDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7b0JBQ3hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtvQkFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtvQkFDeEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtvQkFDbEQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLG9EQUF3QixFQUFFO29CQUNoRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFFO29CQUM1RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO29CQUN4RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7aUJBQzdDLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxnQkFBZ0IsQ0FFNUI7SUFBRCx1QkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExpdmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXZlcHJldmlldy9saXZlcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0bG9ja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYm91dGxvY2tlci9hYm91dGxvY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2NvdW50c2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2FjY291bnRzZXR0aW5ncy9hY2NvdW50c2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld2Nvbm5lY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL25ld2Nvbm5lY3Rpb24vbmV3Y29ubmVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmF0ZXRoaXNhcHBDb21wb25lbnQgfSBmcm9tICcuL3JhdGV0aGlzYXBwL3JhdGV0aGlzYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdXNlcnMvdXNlcnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbGl2ZXByZXZpZXcnLCBjb21wb25lbnQ6IExpdmVQcmV2aWV3Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2Fib3V0bG9ja2VyJywgY29tcG9uZW50OiBBYm91dGxvY2tlckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZmVlZGJhY2snLCBjb21wb25lbnQ6IEZlZWRiYWNrQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhY2NvdW50c2V0dGluZ3MnLCBjb21wb25lbnQ6IEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbmV3Y29ubmVjdGlvbicsIGNvbXBvbmVudDogTmV3Y29ubmVjdGlvbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAncmF0ZXRoaXNhcHAnLCBjb21wb25lbnQ6IFJhdGV0aGlzYXBwQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd1c2VycycsIGNvbXBvbmVudDogVXNlcnNDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=