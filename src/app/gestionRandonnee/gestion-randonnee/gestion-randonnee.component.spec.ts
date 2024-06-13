import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRandonneeComponent } from './gestion-randonnee.component';

describe('GestionRandonneeComponent', () => {
  let component: GestionRandonneeComponent;
  let fixture: ComponentFixture<GestionRandonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRandonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRandonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
