import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-modal',
  templateUrl: './ngb-popup.component.html',
})
export class NgbPopupComponent implements OnChanges, OnDestroy {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  @Input() title: string = '';

  @Input() isPopup: boolean = false;

  constructor(private modalService: NgbModal) {
  }

  ngOnChanges(): void {
    if (this.isPopup) {
      this.modalService.open(this.popup, { centered: true });
    } else {
      this.modalService.dismissAll();
    }
  }

  ngOnDestroy() {
    this.modalService.dismissAll();
  }

  closePopup(param: boolean) {
    this.isPopup = param;
    if (this.isPopup) {
      this.modalService.open(this.popup, { centered: true });
    } else {
      this.modalService.dismissAll();
    }
  }
}
