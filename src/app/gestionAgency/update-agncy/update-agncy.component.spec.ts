import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgncyComponent } from './update-agncy.component';

describe('UpdateAgncyComponent', () => {
  let component: UpdateAgncyComponent;
  let fixture: ComponentFixture<UpdateAgncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgncyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAgncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
