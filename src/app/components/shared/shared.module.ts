import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ModalComponent} from "./components/modal/modal.component";
import {TeaComponent} from "./components/tea/tea.component";
import {ShortenTextPipe} from "./pipes/shorten-text.pipe";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbPopupComponent} from "./components/ngb-popup/ngb-popup.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    TeaComponent,
    ShortenTextPipe,
    NgbPopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModalModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    TeaComponent,
    ShortenTextPipe,
    NgbPopupComponent
  ]
})
export class SharedModule { }
