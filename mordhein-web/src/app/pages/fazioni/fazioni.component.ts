import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fazioni',
  templateUrl: './fazioni.component.html',
  styleUrls: ['./fazioni.component.css']
})
export class FazioniComponent implements OnInit {

  public openSidebar: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.openSidebar = false;
  }

  ngOnInit(): void {
  }

  navigateBack = () => this.router.navigate([`./`], { relativeTo: this.activatedRoute });

}
