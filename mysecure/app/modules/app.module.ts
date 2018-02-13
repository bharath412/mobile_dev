import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivePreviewComponent } from './livepreview/livepreview.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutlockerComponent } from './aboutlocker/aboutlocker.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { RatethisappComponent } from './ratethisapp/ratethisapp.component';
import { UsersComponent } from './users/users.component';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { SharedModule } from './shared';
import { ActivityService } from "../app.service";

@NgModule({
  providers: [
    ActivityService
],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule,
    NativeScriptHttpModule
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    LivePreviewComponent,
    AboutComponent,
    AboutlockerComponent,
    FeedbackComponent,
    AccountsettingsComponent,
    NewconnectionComponent,
    RatethisappComponent,
    UsersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
