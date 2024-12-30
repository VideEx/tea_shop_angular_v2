import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../shared/types/product.type";
import {mergeMap, Observable, of, Subscription} from "rxjs";
import {ProductsService} from "../../../shared/services/products.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductType = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: '',
  };
  private subscription: Subscription = new Subscription();

  constructor(private productsService: ProductsService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription.add(this.activateRoute.params
      .pipe(
        mergeMap((params: Params): Observable<ProductType> => {
          if (params['id']) {
            return this.productsService.getProduct(params['id'])
          }
          return of()
        })
      )
      .subscribe({
        next: (product: ProductType) => this.product = product,
        error: (error) => {
          console.log(error);
          this.router.navigate(['/'])
        }
      }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
