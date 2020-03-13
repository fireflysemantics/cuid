import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidComponent } from './cuid.component';

describe('CuidComponent', () => {
  let component: CuidComponent;
  let fixture: ComponentFixture<CuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
