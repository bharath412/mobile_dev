// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { BackendService } from "./services/backend.service";

import firebase = require("nativescript-plugin-firebase");
const dialogs = require("ui/dialogs");

let deviceToken ="";

setTimeout(function() {
 let firebase  = require("nativescript-plugin-firebase");
 
 let clipboard = require("nativescript-clipboard");

firebase.init({
  onPushTokenReceivedCallback: function(token) {
    dialogs.alert("--onPushTokenReceivedCallback token :" + token);
    clipboard.setText(token).then(function() 
    { console.log("OK, copied to the clipboard"); });
    deviceToken=token;
    console.log("Firebase push token: " + token);
 },
 onMessageReceivedCallback: function(message) {
  dialogs.alert({
     title: "Push message: " + 
     (message.title !== undefined ? message.title : ""),
     message: JSON.stringify(message),
     okButtonText: "OK"
   }); 
    dialogs.alert("--onMessageReceivedCallback deviceToken :" + deviceToken);
    clipboard.setText(deviceToken).then(function() 
    { console.log("OK, copied to the clipboard"); });
   clipboard.setText(deviceToken).then(function() 
   { console.log("OK, copied to the clipboard"); });      
 },
  //persist should be set to false as otherwise numbers aren't returned during livesync
  persist: false,
  storageBucket: 'gs://banklock-efa12.appspot.com',
  onAuthStateChanged: (data: any) => {
     console.log(JSON.stringify(data))

   // console.log("maheshhhhhhhhhhhhhhhhhh")


    if (data.loggedIn) {
     BackendService.token = data.user.uid;
     console.log(data.user.uid +"maheshhhhhhhhhhhhhhhh")

    }
    else {
     //nn// BackendService.token = "";
    }
  }
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
}, 3000);

platformNativeScriptDynamic().bootstrapModule(AppModule);
