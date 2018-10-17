import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduitComponent } from './conduit.component';

describe('ConduitComponent', () => {
  let component: ConduitComponent;
  let fixture: ComponentFixture<ConduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
