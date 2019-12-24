import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalWindowComponent } from './create-modal-window.component';

describe('CreateModalWindowComponent', () => {
  let component: CreateModalWindowComponent;
  let fixture: ComponentFixture<CreateModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
