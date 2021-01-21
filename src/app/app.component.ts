import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mrcs = [
    { title: 'mrc component 1', text: 'aaa' },
    { title: 'mrc component 2', text: 'bbb' },
    { title: 'mrc component 3', text: 'ccc' }
  ];
}
