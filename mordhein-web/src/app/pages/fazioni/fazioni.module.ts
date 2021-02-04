import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FazioniRoutingModule } from "./fazioni-routing.module";
import { FazioniComponent } from "./fazioni.component";
import { CensimentoFazioniComponent } from './censimento-fazioni/censimento-fazioni.component';
import { SharedModule } from "src/app/shared/shared.module";
import { ListaFazioniComponent } from './lista-fazioni/lista-fazioni.component';
import { FiltriFazioniComponent } from './filtri-fazioni/filtri-fazioni.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    FazioniComponent,
    CensimentoFazioniComponent,
    ListaFazioniComponent,
    FiltriFazioniComponent
  ],
  imports: [
    CommonModule,
    FazioniRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class FazioniModule {}