"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var services_1 = require("./services");
var login_module_1 = require("./login/login.module");
var list_module_1 = require("./list/list.module");
var list_detail_module_1 = require("./list-detail/list-detail.module");
var app_routing_module_1 = require("./modules/app-routing.module");
var livepreview_component_1 = require("./modules/livepreview/livepreview.component");
var about_component_1 = require("./modules//about/about.component");
var contact_component_1 = require("./modules//contact/contact.component");
var aboutlocker_component_1 = require("./modules//aboutlocker/aboutlocker.component");
var feedback_component_1 = require("./modules//feedback/feedback.component");
var accountsettings_component_1 = require("./modules//accountsettings/accountsettings.component");
var newconnection_component_1 = require("./modules//newconnection/newconnection.component");
var ratethisapp_component_1 = require("./modules//ratethisapp/ratethisapp.component");
var users_component_1 = require("./modules//users/users.component");
var shared_1 = require("./modules//shared");
var app_service_1 = require("./app.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                services_1.BackendService,
                services_1.FirebaseService,
                services_1.UtilsService,
                app_routes_1.authProviders,
                app_service_1.ActivityService
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
                login_module_1.LoginModule,
                list_module_1.ListModule,
                list_detail_module_1.ListDetailModule,
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                shared_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsMkNBQXdEO0FBQ3hELGlEQUErQztBQUMvQyx1Q0FBMkU7QUFFM0UscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx1RUFBb0U7QUFDcEUsbUVBQWdFO0FBQ2hFLHFGQUFtRjtBQUNuRixvRUFBa0U7QUFDbEUsMEVBQXdFO0FBQ3hFLHNGQUFvRjtBQUNwRiw2RUFBMkU7QUFDM0Usa0dBQWdHO0FBQ2hHLDRGQUEwRjtBQUMxRixzRkFBb0Y7QUFDcEYsb0VBQWtFO0FBQ2xFLDRDQUFpRDtBQUNqRCw2Q0FBZ0Q7QUFxQ2hEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFuQ3JCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVCx5QkFBYztnQkFDZCwwQkFBZTtnQkFDZix1QkFBWTtnQkFDWiwwQkFBYTtnQkFDYiw2QkFBZTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDZCQUFzQjtnQkFDdEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsc0JBQVMsQ0FBQztnQkFDM0MsMEJBQVc7Z0JBQ1gsd0JBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIscUJBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw0QkFBWTtnQkFDWixvQ0FBZ0I7Z0JBQ2hCLDRDQUFvQjtnQkFDcEIsZ0NBQWM7Z0JBQ2QsNENBQW9CO2dCQUNwQixzQ0FBaUI7Z0JBQ2pCLG9EQUF3QjtnQkFDeEIsZ0RBQXNCO2dCQUN0Qiw0Q0FBb0I7Z0JBQ3BCLGdDQUFjO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcblxyXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSBcIi4vbGlzdC9saXN0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMaXN0RGV0YWlsTW9kdWxlIH0gZnJvbSBcIi4vbGlzdC1kZXRhaWwvbGlzdC1kZXRhaWwubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTGl2ZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvbGl2ZXByZXZpZXcvbGl2ZXByZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dGxvY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy8vYWJvdXRsb2NrZXIvYWJvdXRsb2NrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy8vYWNjb3VudHNldHRpbmdzL2FjY291bnRzZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdjb25uZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzLy9uZXdjb25uZWN0aW9uL25ld2Nvbm5lY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0ZXRoaXNhcHBDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvL3JhdGV0aGlzYXBwL3JhdGV0aGlzYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzLy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvL3NoYXJlZCc7XHJcbmltcG9ydCB7IEFjdGl2aXR5U2VydmljZSB9IGZyb20gXCIuL2FwcC5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBVdGlsc1NlcnZpY2UsXHJcbiAgICBhdXRoUHJvdmlkZXJzLFxyXG4gICAgQWN0aXZpdHlTZXJ2aWNlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcclxuICAgIExvZ2luTW9kdWxlLFxyXG4gICAgTGlzdE1vZHVsZSxcclxuICAgIExpc3REZXRhaWxNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgU2hhcmVkTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgIENvbnRhY3RDb21wb25lbnQsXHJcbiAgICAgIExpdmVQcmV2aWV3Q29tcG9uZW50LFxyXG4gICAgICBBYm91dENvbXBvbmVudCxcclxuICAgICAgQWJvdXRsb2NrZXJDb21wb25lbnQsXHJcbiAgICAgIEZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgICBBY2NvdW50c2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICAgIE5ld2Nvbm5lY3Rpb25Db21wb25lbnQsXHJcbiAgICAgIFJhdGV0aGlzYXBwQ29tcG9uZW50LFxyXG4gICAgICBVc2Vyc0NvbXBvbmVudCAgICBcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19