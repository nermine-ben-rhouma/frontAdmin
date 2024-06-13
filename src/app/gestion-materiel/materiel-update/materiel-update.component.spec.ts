import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielUpdateComponent } from './materiel-update.component';

describe('MaterielUpdateComponent', () => {
  let component: MaterielUpdateComponent;
  let fixture: ComponentFixture<MaterielUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
