import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAgncyComponent } from './detail-agncy.component';

describe('DetailAgncyComponent', () => {
  let component: DetailAgncyComponent;
  let fixture: ComponentFixture<DetailAgncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAgncyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAgncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
