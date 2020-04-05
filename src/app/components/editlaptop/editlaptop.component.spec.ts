import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlaptopComponent } from './editlaptop.component';

describe('EditComponent', () => {
  let component: EditlaptopComponent;
  let fixture: ComponentFixture<EditlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
