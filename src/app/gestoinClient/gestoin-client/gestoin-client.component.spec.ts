import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoinClientComponent } from './gestoin-client.component';

describe('GestoinClientComponent', () => {
  let component: GestoinClientComponent;
  let fixture: ComponentFixture<GestoinClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestoinClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestoinClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
