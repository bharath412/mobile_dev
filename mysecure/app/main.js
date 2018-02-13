"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var backend_service_1 = require("./services/backend.service");
var dialogs = require("ui/dialogs");
var deviceToken = "";
setTimeout(function () {
    var firebase = require("nativescript-plugin-firebase");
    var clipboard = require("nativescript-clipboard");
    firebase.init({
        onPushTokenReceivedCallback: function (token) {
            dialogs.alert("--onPushTokenReceivedCallback token :" + token);
            clipboard.setText(token).then(function () { console.log("OK, copied to the clipboard"); });
            deviceToken = token;
            console.log("Firebase push token: " + token);
        },
        onMessageReceivedCallback: function (message) {
            dialogs.alert({
                title: "Push message: " +
                    (message.title !== undefined ? message.title : ""),
                message: JSON.stringify(message),
                okButtonText: "OK"
            });
            dialogs.alert("--onMessageReceivedCallback deviceToken :" + deviceToken);
            clipboard.setText(deviceToken).then(function () { console.log("OK, copied to the clipboard"); });
            clipboard.setText(deviceToken).then(function () { console.log("OK, copied to the clipboard"); });
        },
        //persist should be set to false as otherwise numbers aren't returned during livesync
        persist: false,
        storageBucket: 'gs://banklock-efa12.appspot.com',
        onAuthStateChanged: function (data) {
            console.log(JSON.stringify(data));
            // console.log("maheshhhhhhhhhhhhhhhhhh")
            if (data.loggedIn) {
                backend_service_1.BackendService.token = data.user.uid;
                console.log(data.user.uid + "maheshhhhhhhhhhhhhhhh");
            }
            else {
                //nn// BackendService.token = "";
            }
        }
    }).then(function (instance) {
        console.log("firebase.init done");
    }, function (error) {
        console.log("firebase.init error: " + error);
    });
}, 3000);
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUN6Qyw4REFBNEQ7QUFHNUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXRDLElBQUksV0FBVyxHQUFFLEVBQUUsQ0FBQztBQUVwQixVQUFVLENBQUM7SUFDVixJQUFJLFFBQVEsR0FBSSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUV4RCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUVuRCxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ1osMkJBQTJCLEVBQUUsVUFBUyxLQUFLO1lBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDL0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsV0FBVyxHQUFDLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCx5QkFBeUIsRUFBRSxVQUFTLE9BQU87WUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWCxLQUFLLEVBQUUsZ0JBQWdCO29CQUN2QixDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztnQkFDaEMsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUN6RSxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0EscUZBQXFGO1FBQ3JGLE9BQU8sRUFBRSxLQUFLO1FBQ2QsYUFBYSxFQUFFLGlDQUFpQztRQUNoRCxrQkFBa0IsRUFBRSxVQUFDLElBQVM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFFbkMseUNBQXlDO1lBR3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixnQ0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRSx1QkFBdUIsQ0FBQyxDQUFBO1lBRXBELENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxpQ0FBaUM7WUFDbEMsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsUUFBUTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUNELFVBQVUsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUNKLENBQUM7QUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFVCxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbmxldCBkZXZpY2VUb2tlbiA9XCJcIjtcclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiBsZXQgZmlyZWJhc2UgID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbiBcclxuIGxldCBjbGlwYm9hcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiKTtcclxuXHJcbmZpcmViYXNlLmluaXQoe1xyXG4gIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW4pIHtcclxuICAgIGRpYWxvZ3MuYWxlcnQoXCItLW9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjayB0b2tlbiA6XCIgKyB0b2tlbik7XHJcbiAgICBjbGlwYm9hcmQuc2V0VGV4dCh0b2tlbikudGhlbihmdW5jdGlvbigpIFxyXG4gICAgeyBjb25zb2xlLmxvZyhcIk9LLCBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZFwiKTsgfSk7XHJcbiAgICBkZXZpY2VUb2tlbj10b2tlbjtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiB9LFxyXG4gb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgIHRpdGxlOiBcIlB1c2ggbWVzc2FnZTogXCIgKyBcclxuICAgICAobWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS50aXRsZSA6IFwiXCIpLFxyXG4gICAgIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLFxyXG4gICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgIH0pOyBcclxuICAgIGRpYWxvZ3MuYWxlcnQoXCItLW9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sgZGV2aWNlVG9rZW4gOlwiICsgZGV2aWNlVG9rZW4pO1xyXG4gICAgY2xpcGJvYXJkLnNldFRleHQoZGV2aWNlVG9rZW4pLnRoZW4oZnVuY3Rpb24oKSBcclxuICAgIHsgY29uc29sZS5sb2coXCJPSywgY29waWVkIHRvIHRoZSBjbGlwYm9hcmRcIik7IH0pO1xyXG4gICBjbGlwYm9hcmQuc2V0VGV4dChkZXZpY2VUb2tlbikudGhlbihmdW5jdGlvbigpIFxyXG4gICB7IGNvbnNvbGUubG9nKFwiT0ssIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkXCIpOyB9KTsgICAgICBcclxuIH0sXHJcbiAgLy9wZXJzaXN0IHNob3VsZCBiZSBzZXQgdG8gZmFsc2UgYXMgb3RoZXJ3aXNlIG51bWJlcnMgYXJlbid0IHJldHVybmVkIGR1cmluZyBsaXZlc3luY1xyXG4gIHBlcnNpc3Q6IGZhbHNlLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2Jhbmtsb2NrLWVmYTEyLmFwcHNwb3QuY29tJyxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhOiBhbnkpID0+IHtcclxuICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHJcbiAgIC8vIGNvbnNvbGUubG9nKFwibWFoZXNoaGhoaGhoaGhoaGhoaGhoaGhcIilcclxuXHJcblxyXG4gICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEudXNlci51aWQ7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS51c2VyLnVpZCArXCJtYWhlc2hoaGhoaGhoaGhoaGhoaGhcIilcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAvL25uLy8gQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufSkudGhlbihcclxuICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcclxuICAgIH1cclxuKTtcclxufSwgMzAwMCk7XHJcblxyXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIl19