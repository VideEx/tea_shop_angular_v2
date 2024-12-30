import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AssortmentComponent} from "./assortment/assortment.component";




@NgModule({
  declarations: [
    ProductComponent,
    AssortmentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
