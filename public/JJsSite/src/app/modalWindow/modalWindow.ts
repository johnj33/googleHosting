
import { Component, ViewChild  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'modal-window',
    templateUrl: './ModalWindow.html',
    styleUrls: ['./ModalWindow.scss']
})
export class ModalWindow {
    @ViewChild('childModal') public childModal: ModalDirective;

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

}
