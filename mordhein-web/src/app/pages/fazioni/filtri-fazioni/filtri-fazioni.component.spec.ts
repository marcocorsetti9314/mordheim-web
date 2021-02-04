import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriFazioniComponent } from './filtri-fazioni.component';

describe('FiltriFazioniComponent', () => {
  let component: FiltriFazioniComponent;
  let fixture: ComponentFixture<FiltriFazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltriFazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltriFazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
