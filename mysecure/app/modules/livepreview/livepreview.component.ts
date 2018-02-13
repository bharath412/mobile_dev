import {BackendService, FirebaseService} from "../../services";
import {Gift} from "../../models";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';
import { isAndroid } from "platform";
import { setInterval } from "timer";

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";



@Component({
  selector: 'home',
  templateUrl: 'modules/livepreview/livepreview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LivePreviewComponent implements AfterViewInit{
  public camerasrc = "~/modules/livepreview/camera.html";

 
  public webViewSrc: string = "http://staging.srishtibiz.com:8000/common/PushNotifications.jsp";
  
      @ViewChild("myWebView") webViewRef: ElementRef;
      @ViewChild("urlField") urlFieldRef: ElementRef;
      @ViewChild("labelResult") labelResultRef: ElementRef;
  
      ngAfterViewInit() {
          let webview: WebView = this.webViewRef.nativeElement;
          let label: Label = this.labelResultRef.nativeElement;
          label.text = "WebView is still loading...";
  
          webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
              let message;
              
  
              label.text = message;
              console.log("WebView message - " + message);
          });
      }
  }

 
  
  



