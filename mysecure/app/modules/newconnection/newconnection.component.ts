import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'newconnection',
  templateUrl: 'modules/newconnection/newconnection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewconnectionComponent {
  text: string = 'newconnection';

  public tabSelectedIndex: number;
  
  constructor() {
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
}
