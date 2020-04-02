import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelaptopsComponent } from './createlaptops.component';

describe('CreatelaptopsComponent', () => {
  let component: CreatelaptopsComponent;
  let fixture: ComponentFixture<CreatelaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
