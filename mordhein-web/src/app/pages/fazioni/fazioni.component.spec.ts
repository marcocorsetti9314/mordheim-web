import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazioniComponent } from './fazioni.component';

describe('FazioniComponent', () => {
  let component: FazioniComponent;
  let fixture: ComponentFixture<FazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
