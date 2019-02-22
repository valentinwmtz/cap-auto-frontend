import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveDeleteDialogComponent } from './eleve-delete-dialog.component';

describe('EleveDeleteDialogComponent', () => {
  let component: EleveDeleteDialogComponent;
  let fixture: ComponentFixture<EleveDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
