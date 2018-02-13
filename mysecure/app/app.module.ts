import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { authProviders, appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { BackendService, FirebaseService, UtilsService } from "./services";

import { LoginModule } from "./login/login.module";
import { ListModule } from "./list/list.module";
import { ListDetailModule } from "./list-detail/list-detail.module";
import { AppRoutingModule } from './modules/app-routing.module';
import { LivePreviewComponent } from './modules/livepreview/livepreview.component';
import { AboutComponent } from './modules//about/about.component';
import { ContactComponent } from './modules//contact/contact.component';
import { AboutlockerComponent } from './modules//aboutlocker/aboutlocker.component';
import { FeedbackComponent } from './modules//feedback/feedback.component';
import { AccountsettingsComponent } from './modules//accountsettings/accountsettings.component';
import { NewconnectionComponent } from './modules//newconnection/newconnection.component';
import { RatethisappComponent } from './modules//ratethisapp/ratethisapp.component';
import { UsersComponent } from './modules//users/users.component';
import { SharedModule } from './modules//shared';
import { ActivityService } from "./app.service";

@NgModule({
  providers: [
    BackendService,
    FirebaseService,
    UtilsService,
    authProviders,
    ActivityService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    LoginModule,
    ListModule,
    ListDetailModule,
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
      AppComponent,
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
export class AppModule { }
