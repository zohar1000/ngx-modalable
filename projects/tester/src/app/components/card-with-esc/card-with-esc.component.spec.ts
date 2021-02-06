import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithEscComponent } from './card-with-esc.component';

describe('CardWithEscComponent', () => {
  let component: CardWithEscComponent;
  let fixture: ComponentFixture<CardWithEscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithEscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithEscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
