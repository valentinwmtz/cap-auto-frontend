import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveUpdateComponent } from './eleve-update.component';

describe('EleveUpdateComponent', () => {
  let component: EleveUpdateComponent;
  let fixture: ComponentFixture<EleveUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
