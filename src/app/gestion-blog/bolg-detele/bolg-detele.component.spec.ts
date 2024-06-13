import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgDeteleComponent } from './bolg-detele.component';

describe('BolgDeteleComponent', () => {
  let component: BolgDeteleComponent;
  let fixture: ComponentFixture<BolgDeteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgDeteleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolgDeteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
