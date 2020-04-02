import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephonesComponent } from './createphones.component';

describe('CreatephonesComponent', () => {
  let component: CreatephonesComponent;
  let fixture: ComponentFixture<CreatephonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatephonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
