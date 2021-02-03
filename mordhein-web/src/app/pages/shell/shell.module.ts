import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { ShellComponent } from "./shell.component";

@NgModule({
  declarations: [HomeComponent, ShellComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
})
export class ShellModule { }