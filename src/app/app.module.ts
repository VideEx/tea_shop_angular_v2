import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/features/main/main.component';
import {OrderComponent} from './components/features/order/order.component';
import {AssortmentComponent} from './components/features/products/assortment/assortment.component';
import {ProductComponent} from './components/features/products/product/product.component';
import {HeaderComponent} from './components/shared/components/header/header.component';
import {FooterComponent} from './components/shared/components/footer/footer.component';
import {TeaComponent} from "./components/shared/components/tea/tea.component";
import {ShortenTextPipe} from "./components/shared/pipes/shorten-text.pipe";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./components/shared/services/products.service";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopupComponent } from './components/shared/components/ngb-popup/ngb-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,
    AssortmentComponent,
    TeaComponent,
    HeaderComponent,
    FooterComponent,
    TeaComponent,
    ShortenTextPipe,
    ProductComponent,
    NgbPopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
