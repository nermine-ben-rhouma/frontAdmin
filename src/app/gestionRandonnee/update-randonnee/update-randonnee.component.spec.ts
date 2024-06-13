import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRandonneeComponent } from './update-randonnee.component';

describe('UpdateRandonneeComponent', () => {
  let component: UpdateRandonneeComponent;
  let fixture: ComponentFixture<UpdateRandonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRandonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRandonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
