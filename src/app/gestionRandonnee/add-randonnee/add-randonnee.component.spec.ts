import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRandonneeComponent } from './add-randonnee.component';

describe('AddRandonneeComponent', () => {
  let component: AddRandonneeComponent;
  let fixture: ComponentFixture<AddRandonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRandonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRandonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
