import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-modalable',
  templateUrl: './ngx-modalable.component.html',
  styleUrls: ['./ngx-modalable.component.scss']
})
export class NgxModalableComponent {
  @ViewChild('template') public template: TemplateRef<any>;
  @ViewChild('content') public content;
  @ViewChild('spacer') public spacer;
  @Input()
  set isExpanded(value) { this.onExpand(value); }
  get isExpanded() { return this._isExpanded; }
  @Input() openFn;
  @Input() closeFn;
  localContentHeight;
  _isExpanded = false;

  onExpand(isExpanded) {
    if (isExpanded === this._isExpanded) return;
    this._isExpanded = isExpanded;
    isExpanded ? this.openModal(this.template) : this.closeModal();
  }

  openModal(templateRef: TemplateRef<any>) {
    this.localContentHeight = this.spacer.nativeElement.scrollHeight;
    this.spacer.nativeElement.style.height = `${this.localContentHeight}px`;
    this.spacer.nativeElement.style.display = `block`;
    this.openFn(templateRef);
  }

  closeModal() {
    this.spacer.nativeElement.style.height = `auto`;
    this.spacer.nativeElement.style.display = ``;
    this.closeFn();
  }
}
