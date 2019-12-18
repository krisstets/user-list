import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalWindowComponent } from './delete-modal-window.component';

describe('DeleteModalWindowComponent', () => {
  let component: DeleteModalWindowComponent;
  let fixture: ComponentFixture<DeleteModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
