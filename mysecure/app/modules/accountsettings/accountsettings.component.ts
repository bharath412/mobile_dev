import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'accountsettings',
  templateUrl: 'modules/accountsettings/accountsettings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush ,
  styleUrls: [ "modules/feedback/feedback.component.css"]
})
export class AccountsettingsComponent {
  text: string = 'Account Settings';
}
