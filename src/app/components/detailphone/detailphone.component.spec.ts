import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailphoneComponent } from './detailphone.component';

describe('DetailphoneComponent', () => {
  let component: DetailphoneComponent;
  let fixture: ComponentFixture<DetailphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
