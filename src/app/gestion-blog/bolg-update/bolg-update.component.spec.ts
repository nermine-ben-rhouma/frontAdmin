import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgUpdateComponent } from './bolg-update.component';

describe('BolgUpdateComponent', () => {
  let component: BolgUpdateComponent;
  let fixture: ComponentFixture<BolgUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolgUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
