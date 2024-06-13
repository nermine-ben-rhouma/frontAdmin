import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgencyComponent } from './gestion-agency.component';

describe('GestionAgencyComponent', () => {
  let component: GestionAgencyComponent;
  let fixture: ComponentFixture<GestionAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
