import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeDdlComponent } from './cascade-ddl.component';

describe('CascadeDdlComponent', () => {
  let component: CascadeDdlComponent;
  let fixture: ComponentFixture<CascadeDdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
