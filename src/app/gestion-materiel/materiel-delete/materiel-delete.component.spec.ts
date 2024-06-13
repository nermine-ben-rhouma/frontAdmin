import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielDeleteComponent } from './materiel-delete.component';

describe('MaterielDeleteComponent', () => {
  let component: MaterielDeleteComponent;
  let fixture: ComponentFixture<MaterielDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
