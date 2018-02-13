import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aboutlocker',
  templateUrl: 'modules/aboutlocker/aboutlocker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutlockerComponent {
  text: string = 'About Locker';
}
