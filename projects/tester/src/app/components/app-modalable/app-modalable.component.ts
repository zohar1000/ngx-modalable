import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modalable',
  templateUrl: './app-modalable.component.html',
  styleUrls: ['./app-modalable.component.scss']
})
export class AppModalableComponent {
  @Input() isExpanded = false;
  modalRef;

  constructor(public modalService: MatDialog) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(templateRef, { disableClose: true });
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
