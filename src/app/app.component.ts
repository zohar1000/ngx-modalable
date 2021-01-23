import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
    // { title: 'card component 1', text: 'line 1 - component 1' },
    // { title: 'card component 2', text: 'line 1 - component 2' },
    // { title: 'card component 3', text: 'line 1 - component 3' }

	  { title: 'card component 1', text: '' },
	  { title: 'card component 2', text: '' },
	  { title: 'card component 3', text: '' }
  ];
}
