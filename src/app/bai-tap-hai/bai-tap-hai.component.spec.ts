import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapHaiComponent } from './bai-tap-hai.component';

describe('BaiTapHaiComponent', () => {
  let component: BaiTapHaiComponent;
  let fixture: ComponentFixture<BaiTapHaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapHaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapHaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
