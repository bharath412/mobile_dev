"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utils_service_1 = require("./utils.service");
require("rxjs/add/operator/share");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(ngZone, utils) {
        this.ngZone = ngZone;
        this.utils = utils;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    FirebaseService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            return JSON.stringify(result);
        }, function (errorMessage) {
            console.log(errorMessage);
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        firebase.logout();
    };
    FirebaseService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    FirebaseService.prototype.getMyWishList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Gifts';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getMyGift = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            observer.next(_this._allItems.filter(function (s) { return s.id === id; })[0]);
        }).share();
    };
    FirebaseService.prototype.getMyMessage = function () {
        return new Observable_1.Observable(function (observer) {
            firebase.getRemoteConfig({
                developerMode: false,
                cacheExpirationSeconds: 300,
                properties: [{
                        key: "message",
                        default: "Happy Holidays!"
                    }]
            }).then(function (result) {
                console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
                for (var entry in result.properties) {
                    observer.next(result.properties[entry]);
                }
            });
        }).share();
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (backend_service_1.BackendService.token === result.UID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.publishUpdates = function () {
        // here, we sort must emit a *new* value (immutability!)
        this._allItems.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
    };
    FirebaseService.prototype.add = function (gift) {
        return firebase.push("/Gifts", { "name": gift, "UID": backend_service_1.BackendService.token, "date": 0 - Date.now(), "imagepath": "" }).then(function (result) {
            return 'Gift added to your wishlist!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.editGift = function (id, description, imagepath) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description,
            imagepath: imagepath
        })
            .then(function (result) {
            return 'You have successfully edited this gift!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.editDescription = function (id, description) {
        this.publishUpdates();
        return firebase.update("/Gifts/" + id + "", {
            description: description
        })
            .then(function (result) {
            return 'You have successfully edited the description!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.delete = function (gift) {
        return firebase.remove("/Gifts/" + gift.id + "")
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.uploadFile = function (localPath, file) {
        var filename = this.utils.getFilename(localPath);
        var remotePath = "" + filename;
        return firebase.uploadFile({
            remoteFullPath: remotePath,
            localFullPath: localPath,
            onProgress: function (status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
        });
    };
    FirebaseService.prototype.getDownloadUrl = function (remoteFilePath) {
        return firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath
        })
            .then(function (url) {
            return url;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone,
            utils_service_1.UtilsService])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUMxRCw4Q0FBMkM7QUFDM0Msd0RBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxtQ0FBaUM7QUFHakM7SUFDRSx5QkFDVSxNQUFjLEVBQ2QsS0FBbUI7UUFEbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFHN0IsVUFBSyxHQUFpQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEQsY0FBUyxHQUFnQixFQUFFLENBQUM7SUFKbEMsQ0FBQztJQU1ILGtDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FFeEIsQ0FBQyxDQUFDLElBQUksQ0FDRCxVQUFVLE1BQVU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBRUwsVUFBQyxNQUFXO1lBQ1IsZ0NBQWMsQ0FBQyxLQUFLLEdB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QUFJLENBQ0gsVUFBVSxHQUFVO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVDLHNDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBM01VLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FHTyxhQUFNO1lBQ1AsNEJBQVk7T0FIbEIsZUFBZSxDQTRNM0I7SUFBRCxzQkFBQztDQUFBLEFBNU1ELElBNE1DO0FBNU1ZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlciwgR2lmdH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZVxyXG4gICl7fVxyXG4gICAgXHJcbiAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxHaWZ0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICBcclxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8R2lmdD4gPSBbXTtcclxuICBcclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgIFxyXG4gICAgfSkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBcclxuICAgICAgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XHJcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgIFxyXG4gICAgICB9LCBcclxuXHJcblxyXG4gICAgICBcclxuICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcclxuICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBnZXRNeVdpc2hMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnR2lmdHMnO1xyXG4gICAgICBcclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBnZXRNeUdpZnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLl9hbGxJdGVtcy5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF0pO1xyXG4gICAgfSkuc2hhcmUoKTtcclxuICB9XHJcblxyXG4gIGdldE15TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOmFueSkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5nZXRSZW1vdGVDb25maWcoe1xyXG4gICAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSwgLy8gcGxheSB3aXRoIHRoaXMgYm9vbGVhbiB0byBnZXQgbW9yZSBmcmVxdWVudCB1cGRhdGVzIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICBjYWNoZUV4cGlyYXRpb25TZWNvbmRzOiAzMDAsIC8vIDEwIG1pbnV0ZXMsIGRlZmF1bHQgaXMgMTIgaG91cnMuLiBzZXQgdG8gYSBsb3dlciB2YWx1ZSBkdXJpbmcgZGV2XHJcbiAgICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgIGtleTogXCJtZXNzYWdlXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiSGFwcHkgSG9saWRheXMhXCJcclxuICAgIH1dXHJcbiAgfSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYXQgXCIgKyByZXN1bHQubGFzdEZldGNoICsgKHJlc3VsdC50aHJvdHRsZWQgPyBcIiAodGhyb3R0bGVkKVwiIDogXCJcIikpO1xyXG4gICAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gcmVzdWx0LnByb3BlcnRpZXMpIFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0LnByb3BlcnRpZXNbZW50cnldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfSkuc2hhcmUoKTtcclxufVxyXG5cclxuICAgIFxyXG5cclxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XHJcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgIHB1Ymxpc2hVcGRhdGVzKCkge1xyXG4gICAgLy8gaGVyZSwgd2Ugc29ydCBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcclxuICAgIHRoaXMuX2FsbEl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxJdGVtc10pO1xyXG4gIH1cclxuXHJcbiAgYWRkKGdpZnQ6IHN0cmluZykgeyAgIFxyXG4gICAgcmV0dXJuIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgXCIvR2lmdHNcIixcclxuICAgICAgICB7IFwibmFtZVwiOiBnaWZ0LCBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlbiwgXCJkYXRlXCI6IDAgLSBEYXRlLm5vdygpLCBcImltYWdlcGF0aFwiOiBcIlwifVxyXG4gICAgICApLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICAgIHJldHVybiAnR2lmdCBhZGRlZCB0byB5b3VyIHdpc2hsaXN0ISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgXHJcbiAgfVxyXG5cclxuICBlZGl0R2lmdChpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGltYWdlcGF0aDogc3RyaW5nKXtcclxuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBpbWFnZXBhdGg6IGltYWdlcGF0aH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhpcyBnaWZ0ISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gIH1cclxuICBlZGl0RGVzY3JpcHRpb24oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKXtcclxuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS51cGRhdGUoXCIvR2lmdHMvXCIraWQrXCJcIix7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9ufSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGVkaXRlZCB0aGUgZGVzY3JpcHRpb24hJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgfVxyXG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVtb3ZlKFwiL0dpZnRzL1wiK2dpZnQuaWQrXCJcIilcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgXHJcbiAgdXBsb2FkRmlsZShsb2NhbFBhdGg6IHN0cmluZywgZmlsZT86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMudXRpbHMuZ2V0RmlsZW5hbWUobG9jYWxQYXRoKTtcclxuICAgICAgbGV0IHJlbW90ZVBhdGggPSBgJHtmaWxlbmFtZX1gOyAgIFxyXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZVBhdGgsXHJcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogbG9jYWxQYXRoLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERvd25sb2FkVXJsKHJlbW90ZUZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UuZ2V0RG93bmxvYWRVcmwoe1xyXG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVGaWxlUGF0aH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufSJdfQ==