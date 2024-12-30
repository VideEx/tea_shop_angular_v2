import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {

  @Input()
  get product(): ProductType {
    return this._product;
  }
  set product(data: ProductType) {
    this._product = data
  }

  private _product: ProductType = {} as ProductType;
  constructor() { }

  ngOnInit(): void {
  }

}
