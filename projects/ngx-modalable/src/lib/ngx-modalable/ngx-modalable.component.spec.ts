import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModalableComponent } from './ngx-modalable.component';

describe('NgxModalableComponent', () => {
  let component: NgxModalableComponent;
  let fixture: ComponentFixture<NgxModalableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxModalableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxModalableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
