
declare var $: any;
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  isPopUp: boolean = false;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;


  constructor( ) {
    this.observable = new Observable<boolean>((observer) => {
      const timeout = setTimeout(() => {
        observer.next(true)
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout)
        }
      }
    })
  }

  ngOnInit(): void {
    $('#accordion').accordion({
      heightStyle: "content",
      icons: false
    });
    this.subscription = this.observable.subscribe((param: boolean) => {
      if (param) this.isPopUp = param;
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
