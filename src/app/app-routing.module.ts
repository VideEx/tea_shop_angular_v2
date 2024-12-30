import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/features/products/product/product.component";
import {OrderComponent} from "./components/features/order/order.component";
import {MainComponent} from "./components/features/main/main.component";
import {AssortmentComponent} from "./components/features/products/assortment/assortment.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: AssortmentComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
