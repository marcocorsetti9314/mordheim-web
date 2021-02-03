import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensimentoFazioniComponent } from './censimento-fazioni.component';

describe('CensimentoFazioniComponent', () => {
  let component: CensimentoFazioniComponent;
  let fixture: ComponentFixture<CensimentoFazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensimentoFazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensimentoFazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
