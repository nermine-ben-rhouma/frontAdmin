import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAgncyComponent } from './delete-agncy.component';

describe('DeleteAgncyComponent', () => {
  let component: DeleteAgncyComponent;
  let fixture: ComponentFixture<DeleteAgncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAgncyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAgncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
