import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-modalable',
  templateUrl: './modalable.component.html',
  styleUrls: ['./modalable.component.scss']
})
export class ModalableComponent {
  @ViewChild('template') public template: TemplateRef<any>;
  @Input() set isExpand(value) {
    if (value) {
      this.openModal(this.template);
    } else if (this.modalRef) {
      this.modalRef.hide();
    }
  }
  readonly MODAL_OPTS: ModalOptions = { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false };
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.MODAL_OPTS);
    this.modalService.onHide.pipe(take(1)).subscribe(() => this.modalRef = null);
  }
}
