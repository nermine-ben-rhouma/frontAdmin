import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetelelRandonneeComponent } from './detelel-randonnee.component';

describe('DetelelRandonneeComponent', () => {
  let component: DetelelRandonneeComponent;
  let fixture: ComponentFixture<DetelelRandonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetelelRandonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetelelRandonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
