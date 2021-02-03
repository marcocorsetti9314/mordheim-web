import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFazioniComponent } from './lista-fazioni.component';

describe('ListaFazioniComponent', () => {
  let component: ListaFazioniComponent;
  let fixture: ComponentFixture<ListaFazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
