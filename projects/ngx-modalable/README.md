ngx-modalable enables displaying a portion of your class template in a modal while preserving the binding. <br/>


<sub>(Click the animated .gif below to enlarge it)</sub><br/>
![](https://github.com/zohar1000/ngx-modalable/blob/master/docs/assets/recording.gif)

This is useful for cases where the component size is smaller than its content size (e.g. card),
and you want to comfortably view/edit that content in a modal instead of scrolling inside the component.<br/>

In case you edit the component the data binding remain when displayed in the modal.<br/>

# Using ngx-modalable
Wrap the template portion you want to display in a modal with ngx-modalable tag.<br/>
In the example below the template portion contains a card.

card.component.ts
```angular2html
export class CardComponent {
  isExpanded = false;
  modalRef;

  constructor(public modalService: MatDialog) {}

  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClickTest() {
    alert('click event was captured in the card component class!');
  }

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(templateRef, { disableClose: true });
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
```


card.component.html
```angular2html
<ngx-modalable
    [isExpanded]="isExpanded"
    [openFn]="openModal.bind(this)"
    [closeFn]="closeModal.bind(this)">
  <mat-card class="content" [ngClass]="{shadowless: isExpanded}">
    <mat-card-header>
      <mat-card-title>CARD TITLE</mat-card-title>
      <button mat-button mat-raised-button (click)="onClickToggle()">{{isExpanded ? 'Collapse' : 'Expand'}}</button>
    </mat-card-header>
    <mat-card-content>
      <mat-form-field appearance="fill"  class="textarea">
        <mat-label>Textarea</mat-label>
        <textarea matInput></textarea>
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button mat-raised-button color="primary" (click)="onClickTest()">TEST CLICK BINDING</button>
    </mat-card-actions>
  </mat-card>
</ngx-modalable>
```

The template in initially displayed inline, it is determined by the value of 'isExpanded' which defaults to false.<br/>

The tag ngx-modalable receives 3 input fields:
1. isExpanded - a boolean which determines if the template should be displayed in a modal or not.<br/>
2. openFn - a function that will be called by ngx-modalable when isExpanded changes to true.<br/>
   the function will be passed a parameter of type TemplateRef which represents the template portion to be displayed in a modal.<br/>
   the function should use this parameter to display the template in a modal.<br/>
   opening the modal from the containing component and not by ngx-modalable makes it flexible to use any theming framework such as material, bootstrap, prime, ng-zoro, nebular, etc.
3. closeFn - a function that will be called by ngx-modalable when isExpanded changes to false.<br/>
   the function should close the modal, the template portion will return to be displayed inline.


# Installation

`npm install ngx-modalable`

Import ngx-module in your shared module.<br>

shared.module.ts<br/>
```angular2html
import { NgxModalableModule } from 'ngx-modalable';
.
.
@NgModule(
  imports: [
    NgxModalableModule
  ]
})
export class SharedModule {}
```


