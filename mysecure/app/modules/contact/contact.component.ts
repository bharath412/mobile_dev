import { Component, ChangeDetectionStrategy,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ObservableArray} from "data/observable-array";
import { Label } from "ui/label";
import { ActivityService } from "../../app.service";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);




@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
    text: string = 'Contact Page';

    public tabSelectedIndex: number;
    public activities$: Observable<any[]>;
    
    constructor(private activityService: ActivityService) {
       
        this.tabSelectedIndex = 1;
         

       
     }
    
     changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }
    ngOnInit() {
        this.activities$ = this.activityService.getActivities();

        
        
    }

    refreshList(args) {
        var pullRefresh = args.object;
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
   }
}