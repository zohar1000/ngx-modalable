ngx-modalable enable displaying a component template or a portion of it in a modal while preserving the binding. <br/>


<sup>(Click the animated gif below to enlarge it)</sup><br/>
![](https://github.com/zohar1000/ngx-modalable/blob/master/docs/assets/recording.gif)

This is useful for cases where the component size is smaller than its content size (e.g. card),
and you want to comfortably view/edit that content in a modal instead of scrolling inside the component.<br/>

In case you edit the component, the data binding remains when the template is displayed in the modal.<br/>

> you can display in a modal the entire component template OR a portion of it.<br/>
> For example, if your template contains a form and you wish to display only the form portion in a modal.

To play locally the sample displayed above, clone this repo and run 'npm install' and 'ng serve tester'. 
<br/>

# Using ngx-modalable
Wrap the template portion you want to display in a modal with ngx-modalable tag.<br/>
In the example below the template portion contains a material card.

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
<br/>

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
<br/>

# Styling

Sometimes you would want to style your template when it is displayed in a modal, for example if you want to drop the 
card shadow.<br/>Then you could have a class or style which depends on 'isExpanded' property:<br/><br/>
`<mat-card class="content" [ngClass]="{shadowless: isExpanded}">`

and in you card.component.scss:
```angular2html
.shadowless {
  box-shadow: none;
}
```
<br/>

# Enabling modal close by pressing ESC key or by clicking the backdrop
The above code shown for the card class is appropriate for modals which cannot be closed by pressing ESC or 
by clicking the backdrop.<br/>
In case you want to allow it then your component class will change a bit:<br/>

card.component.ts
```angular2html
export class Card {
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
    this.modalRef = this.modalService.open(templateRef, { disableClose: false });
    this.modalRef.afterClosed().pipe(take(1)).subscribe(() => {
      if (this.isExpanded) this.onClickToggle();
    });
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
```
<br/>

# Wrapper component
If you use ngx-modalable in several components, then you will have a repeated code of opening and closing the modal in all the consuming components.<br/>
It would be better to make a wrapper component, place the code that handles the modal within it and use the wrapper 
component by all the consuming components.<br/>
Below is a wrapper component example named AppModalable.<br/><br/>

app-modalable.component.ts
```angular2html
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
```

app-modalable.component.html
```angular2html
<ngx-modalable
    [isExpanded]="isExpanded"
    [openFn]="openModal.bind(this)"
    [closeFn]="closeModal.bind(this)">
  <ng-content></ng-content>
</ngx-modalable>
```

The card component code will be reduced when using app-modalable.<br/>

card.component.ts
```angular2html
export class Card {
  @Input() isExpanded = false;
    
  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }
    
  onClickTest() {
    alert('click event was captured in the card component class!');
  }
}
```

card.component.html
```angular2html
<app-modalable [isExpanded]="isExpanded">
  .
  CARD CONTENT HERE
  .
</app-modalable>
```
