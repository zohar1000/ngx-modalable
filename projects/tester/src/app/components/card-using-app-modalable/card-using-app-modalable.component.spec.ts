import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsingAppModalableComponent } from './card-using-app-modalable.component';

describe('CardUsingAppModalableComponent', () => {
  let component: CardUsingAppModalableComponent;
  let fixture: ComponentFixture<CardUsingAppModalableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsingAppModalableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUsingAppModalableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
