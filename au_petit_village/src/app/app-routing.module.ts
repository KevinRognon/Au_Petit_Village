import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AproposComponent} from "./apropos/apropos.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "product/:id", component: ProductDetailComponent},
  {path: "panier", component: PanierComponent},
  {path: "a-propos", component: AproposComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
