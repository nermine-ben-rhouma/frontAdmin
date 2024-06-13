import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgncyComponent } from './add-agncy.component';

describe('AddAgncyComponent', () => {
  let component: AddAgncyComponent;
  let fixture: ComponentFixture<AddAgncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgncyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAgncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
