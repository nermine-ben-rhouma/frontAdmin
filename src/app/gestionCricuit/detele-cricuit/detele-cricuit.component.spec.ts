import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleCricuitComponent } from './detele-cricuit.component';

describe('DeteleCricuitComponent', () => {
  let component: DeteleCricuitComponent;
  let fixture: ComponentFixture<DeteleCricuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleCricuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeteleCricuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
