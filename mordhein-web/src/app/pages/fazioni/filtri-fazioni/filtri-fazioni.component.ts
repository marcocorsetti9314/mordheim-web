import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { switchMap, tap, catchError, takeUntil, retry, map, filter, delay, distinctUntilChanged, debounceTime, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-filtri-fazioni',
  templateUrl: './filtri-fazioni.component.html',
  styleUrls: ['./filtri-fazioni.component.css']
})
export class FiltriFazioniComponent implements OnInit, AfterViewInit {
  @ViewChild('btncerca', { read: ElementRef, static: true }) btncerca: ElementRef;

  public form: FormGroup;
  public nome = new FormControl('');
  public n_max = new FormControl(null);
  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  ngAfterViewInit(): void {
    fromEvent(this.btncerca.nativeElement, 'click').pipe(
      tap(() => console.log(this.form.value)),
    ).subscribe();
  }

  initForm(){
    this.form = new FormGroup ({
      nome: this.nome,
      n_max: this.n_max
    })

  }


}
