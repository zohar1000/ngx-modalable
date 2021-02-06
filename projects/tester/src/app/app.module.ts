import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { NgxModalableModule } from 'ngx-modalable';
import { CardWithEscComponent } from './components/card-with-esc/card-with-esc.component';
import { AppModalableComponent } from './components/app-modalable/app-modalable.component';
import { CardUsingAppModalableComponent } from './components/card-using-app-modalable/card-using-app-modalable.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardWithEscComponent,
    AppModalableComponent,
    CardUsingAppModalableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgxModalableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
