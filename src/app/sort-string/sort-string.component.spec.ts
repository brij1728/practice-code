import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortStringComponent } from './sort-string.component';

describe('SortStringComponent', () => {
  let component: SortStringComponent;
  let fixture: ComponentFixture<SortStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
