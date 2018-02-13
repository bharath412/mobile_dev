import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: 'modules/feedback/feedback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush ,
  styleUrls: [ "modules/feedback/feedback.component.css"]
})
export class FeedbackComponent {
  text: string = 'Feed Back';
}
