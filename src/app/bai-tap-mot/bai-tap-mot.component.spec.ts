import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapMotComponent } from './bai-tap-mot.component';

describe('BaiTapMotComponent', () => {
  let component: BaiTapMotComponent;
  let fixture: ComponentFixture<BaiTapMotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapMotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
