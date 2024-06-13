import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCricuitComponent } from './add-cricuit.component';

describe('AddCricuitComponent', () => {
  let component: AddCricuitComponent;
  let fixture: ComponentFixture<AddCricuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCricuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCricuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
