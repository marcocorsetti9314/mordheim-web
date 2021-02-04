import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/shell/home/home.component';
import { ShellComponent } from './pages/shell/shell.component';


const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'warbands',
        loadChildren: () =>
          import("./pages/fazioni/fazioni.module").then(
            (m) => m.FazioniModule
          )
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
