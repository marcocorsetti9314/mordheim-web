import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CensimentoFazioniComponent } from "./censimento-fazioni/censimento-fazioni.component";
import { FazioniComponent } from "./fazioni.component";

const routes: Routes = [
  {
    path: '',
    component: FazioniComponent,
    children: [
      {
        path: 'new',
        component: CensimentoFazioniComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazioniRoutingModule { }