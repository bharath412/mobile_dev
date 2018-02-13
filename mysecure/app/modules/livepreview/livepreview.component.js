"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var LivePreviewComponent = /** @class */ (function () {
    function LivePreviewComponent() {
        this.camerasrc = "~/modules/livepreview/camera.html";
        this.webViewSrc = "http://staging.srishtibiz.com:8000/common/PushNotifications.jsp";
    }
    LivePreviewComponent.prototype.ngAfterViewInit = function () {
        var webview = this.webViewRef.nativeElement;
        var label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var message;
            label.text = message;
            console.log("WebView message - " + message);
        });
    };
    __decorate([
        core_2.ViewChild("myWebView"),
        __metadata("design:type", core_2.ElementRef)
    ], LivePreviewComponent.prototype, "webViewRef", void 0);
    __decorate([
        core_2.ViewChild("urlField"),
        __metadata("design:type", core_2.ElementRef)
    ], LivePreviewComponent.prototype, "urlFieldRef", void 0);
    __decorate([
        core_2.ViewChild("labelResult"),
        __metadata("design:type", core_2.ElementRef)
    ], LivePreviewComponent.prototype, "labelResultRef", void 0);
    LivePreviewComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'modules/livepreview/livepreview.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], LivePreviewComponent);
    return LivePreviewComponent;
}());
exports.LivePreviewComponent = LivePreviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGl2ZXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esc0NBQW1FO0FBQ25FLHNDQUE2RTtBQUM3RSx3Q0FBcUQ7QUFjckQ7SUFQQTtRQVFTLGNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztRQUdoRCxlQUFVLEdBQVcsaUVBQWlFLENBQUM7SUFtQjlGLENBQUM7SUFiRyw4Q0FBZSxHQUFmO1FBQ0ksSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDckQsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDckQsS0FBSyxDQUFDLElBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUUzQyxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxJQUFtQjtZQUMvRCxJQUFJLE9BQU8sQ0FBQztZQUdaLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEJ1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBYSxpQkFBVTs0REFBQztJQUN4QjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBYyxpQkFBVTs2REFBQztJQUNyQjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBaUIsaUJBQVU7Z0VBQUM7SUFSOUMsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FHVyxvQkFBb0IsQ0F1QjlCO0lBQUQsMkJBQUM7Q0FBQSxBQXZCSCxJQXVCRztBQXZCVSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwgfSBmcm9tIFwidGltZXJcIjtcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbGl2ZXByZXZpZXcvbGl2ZXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuXG5leHBvcnQgY2xhc3MgTGl2ZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuICBwdWJsaWMgY2FtZXJhc3JjID0gXCJ+L21vZHVsZXMvbGl2ZXByZXZpZXcvY2FtZXJhLmh0bWxcIjtcblxuIFxuICBwdWJsaWMgd2ViVmlld1NyYzogc3RyaW5nID0gXCJodHRwOi8vc3RhZ2luZy5zcmlzaHRpYml6LmNvbTo4MDAwL2NvbW1vbi9QdXNoTm90aWZpY2F0aW9ucy5qc3BcIjtcbiAgXG4gICAgICBAVmlld0NoaWxkKFwibXlXZWJWaWV3XCIpIHdlYlZpZXdSZWY6IEVsZW1lbnRSZWY7XG4gICAgICBAVmlld0NoaWxkKFwidXJsRmllbGRcIikgdXJsRmllbGRSZWY6IEVsZW1lbnRSZWY7XG4gICAgICBAVmlld0NoaWxkKFwibGFiZWxSZXN1bHRcIikgbGFiZWxSZXN1bHRSZWY6IEVsZW1lbnRSZWY7XG4gIFxuICAgICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgbGV0IGxhYmVsOiBMYWJlbCA9IHRoaXMubGFiZWxSZXN1bHRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBsYWJlbC50ZXh0ID0gXCJXZWJWaWV3IGlzIHN0aWxsIGxvYWRpbmcuLi5cIjtcbiAgXG4gICAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgICBsYWJlbC50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbiBcbiAgXG4gIFxuXG5cblxuIl19