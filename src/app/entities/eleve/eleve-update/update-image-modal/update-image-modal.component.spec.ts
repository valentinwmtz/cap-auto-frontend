import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImageModalComponent } from './update-image-modal.component';

describe('UpdateImageModalComponent', () => {
  let component: UpdateImageModalComponent;
  let fixture: ComponentFixture<UpdateImageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateImageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
