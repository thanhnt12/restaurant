import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachnhanvienboibanComponent } from './danhsachnhanvienboiban.component';

describe('DanhsachnhanvienboibanComponent', () => {
  let component: DanhsachnhanvienboibanComponent;
  let fixture: ComponentFixture<DanhsachnhanvienboibanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachnhanvienboibanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachnhanvienboibanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
