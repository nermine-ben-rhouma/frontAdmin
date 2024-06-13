import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielAddComponent } from './materiel-add.component';

describe('MaterielAddComponent', () => {
  let component: MaterielAddComponent;
  let fixture: ComponentFixture<MaterielAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
