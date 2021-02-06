import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalableComponent } from './app-modalable.component';

describe('AppModalableComponent', () => {
  let component: AppModalableComponent;
  let fixture: ComponentFixture<AppModalableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModalableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModalableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
