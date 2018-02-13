import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as utils from "utils/utils";

@Component({
  selector: 'ratethisapp',
  templateUrl: 'modules/ratethisapp/ratethisapp.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatethisappComponent {
 
  public firstWebViewSRC = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:#0099CC; text-align: center;">First WebView</span></body></html>';
  public secondWebViewSRC = "~/ui-category/web-view/web-view-html/test.html";

}
