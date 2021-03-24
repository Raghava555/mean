import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseCompComponent } from './reuse-comp.component';

describe('ReuseCompComponent', () => {
  let component: ReuseCompComponent;
  let fixture: ComponentFixture<ReuseCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
