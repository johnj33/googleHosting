import { Component, ViewContainerRef  } from '@angular/core';
//import { ModalWindow } from './ModalWindow/ModalWindow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  title = 'app works!';
  public launchModal() {
    alert("got here");
    //ModalWindow.call("");
  }
  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
