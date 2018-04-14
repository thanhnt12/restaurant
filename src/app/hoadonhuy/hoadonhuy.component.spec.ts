import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonhuyComponent } from './hoadonhuy.component';

describe('HoadonhuyComponent', () => {
  let component: HoadonhuyComponent;
  let fixture: ComponentFixture<HoadonhuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonhuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonhuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
