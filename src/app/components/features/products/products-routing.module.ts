import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeaComponent} from "../../shared/components/tea/tea.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: '', component: TeaComponent},
  {path: ':id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
