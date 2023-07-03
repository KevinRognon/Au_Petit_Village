import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProduitsComponent} from "./produits/produits.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "produits", component: ProduitsComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
