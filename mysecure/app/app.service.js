"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getActivities = function () {
        return this.http.get('http://staging.srishtibiz.com:8000/rest/UserService/users')
            .map(function (res) { return res.json(); });
    };
    ActivityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ActivityService);
    return ActivityService;
}());
exports.ActivityService = ActivityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFFckMsaUNBQStCO0FBSS9CO0lBRUkseUJBQ1ksSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFJdEIsQ0FBQztJQUVNLHVDQUFhLEdBQXBCO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFBO0lBR3RDLENBQUM7SUFmUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSVMsV0FBSTtPQUhiLGVBQWUsQ0FpQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuICAgIFxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3Rpdml0eVNlcnZpY2Uge1xyXG4gICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwIFxyXG4gICAgKSB7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRBY3Rpdml0aWVzKCk6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL3N0YWdpbmcuc3Jpc2h0aWJpei5jb206ODAwMC9yZXN0L1VzZXJTZXJ2aWNlL3VzZXJzJylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPGFueVtdPnJlcy5qc29uKCkpXHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbiJdfQ==