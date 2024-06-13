import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgAddComponent } from './bolg-add.component';

describe('BolgAddComponent', () => {
  let component: BolgAddComponent;
  let fixture: ComponentFixture<BolgAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolgAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
