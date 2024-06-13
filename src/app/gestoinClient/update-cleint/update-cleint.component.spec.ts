import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCleintComponent } from './update-cleint.component';

describe('UpdateCleintComponent', () => {
  let component: UpdateCleintComponent;
  let fixture: ComponentFixture<UpdateCleintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCleintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCleintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
