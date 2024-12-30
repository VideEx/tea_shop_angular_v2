import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProductType} from "../types/product.type";
import {
  map, Observable,
} from "rxjs";
import {OrderType} from "../types/order.type";
import {ProductComponent} from "../../features/products/product/product.component";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(searchString?: string): Observable<ProductType[]> {
    let params = new HttpParams();
    if (searchString) {
      params = params.append('search', searchString);
    }
    return this.http.get<ProductType[]>('https://testologia.ru/tea', {params})
      .pipe(
        map(products => {
          if (Array.isArray(products)) {
            return products;
          }
          return Object.values(products);
        })
      );
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`)
  }

  createOrder(data: OrderType): Observable<{ success: number, message?: string }> {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.ru/order-tea`, data);
  }
}
