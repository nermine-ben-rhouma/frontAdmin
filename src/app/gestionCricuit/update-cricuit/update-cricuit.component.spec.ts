import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCricuitComponent } from './update-cricuit.component';

describe('UpdateCricuitComponent', () => {
  let component: UpdateCricuitComponent;
  let fixture: ComponentFixture<UpdateCricuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCricuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCricuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
