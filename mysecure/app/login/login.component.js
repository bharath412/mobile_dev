"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../models/user.model");
var services_1 = require("../services");
var dialogs_1 = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.routerExtensions.navigate(["/"], { clearHistory: true });
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Bank Lockers to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.firebaseService.resetPassword(data.text.trim())
                    .then(function (result) {
                    if (result) {
                        alert(result);
                    }
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gf-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQU9qRjtJQU1FLHdCQUFvQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMdEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFWiwrQkFBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7UUFFakUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztZQUNqQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDckMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFBQSxpQkFrQkE7UUFoQkUsZ0JBQU0sQ0FBQztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsT0FBTyxFQUFFLHVGQUF1RjtZQUNoRyxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7U0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDakQsSUFBSSxDQUFDLFVBQUMsTUFBVTtvQkFDZixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUNULEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztZQUNOLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRixzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQXJFVSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQzt5Q0FPcUMsMEJBQWU7WUFDZCxvQ0FBZ0I7T0FQM0MsY0FBYyxDQXNFMUI7SUFBRCxxQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZ2YtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcblxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIHByb21wdCh7XHJcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCYW5rIExvY2tlcnMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiB9XHJcbiAgXHJcbnRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG59Il19