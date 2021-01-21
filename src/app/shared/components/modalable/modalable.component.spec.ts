import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalableComponent } from './modalable.component';

describe('ModalableComponent', () => {
  let component: ModalableComponent;
  let fixture: ComponentFixture<ModalableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
