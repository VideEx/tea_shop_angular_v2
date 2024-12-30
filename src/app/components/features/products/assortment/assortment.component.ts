import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {ProductType} from "../../../shared/types/product.type";
import {Subscription, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'assortment-component',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.css']
})
export class AssortmentComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  products: ProductType[] = [];
  isLoading: boolean = false;
  title: string = 'Наши чайные коллекции';
  isEmptySearchData: boolean = false;

  constructor(private productsService: ProductsService, private router: Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subscription.add(this.productsService.getProducts()
      .pipe(
        tap(()=> {
          this.isLoading = false;
          this.isEmptySearchData = false;
        })
      )
      .subscribe({
        next: (data) => {
          if (data.length <= 0) {
            this.isEmptySearchData = true;
          }
          this.products = data
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/'])
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
