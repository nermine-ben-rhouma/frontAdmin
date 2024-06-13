import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgComponent } from './bolg.component';

describe('BolgComponent', () => {
  let component: BolgComponent;
  let fixture: ComponentFixture<BolgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
