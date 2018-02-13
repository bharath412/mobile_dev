import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LivePreviewComponent } from './livepreview/livepreview.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutlockerComponent } from './aboutlocker/aboutlocker.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { RatethisappComponent } from './ratethisapp/ratethisapp.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: ContactComponent },
      { path: 'livepreview', component: LivePreviewComponent },
      { path: 'about', component: AboutComponent },
      { path: 'aboutlocker', component: AboutlockerComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'accountsettings', component: AccountsettingsComponent },
      { path: 'newconnection', component: NewconnectionComponent },
      { path: 'ratethisapp', component: RatethisappComponent },
      { path: 'users', component: UsersComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
