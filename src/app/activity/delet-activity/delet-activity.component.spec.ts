import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletActivityComponent } from './delet-activity.component';

describe('DeletActivityComponent', () => {
  let component: DeletActivityComponent;
  let fixture: ComponentFixture<DeletActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
