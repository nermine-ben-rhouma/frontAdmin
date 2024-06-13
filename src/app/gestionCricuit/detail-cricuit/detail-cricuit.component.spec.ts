import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCricuitComponent } from './detail-cricuit.component';

describe('DetailCricuitComponent', () => {
  let component: DetailCricuitComponent;
  let fixture: ComponentFixture<DetailCricuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCricuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCricuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
