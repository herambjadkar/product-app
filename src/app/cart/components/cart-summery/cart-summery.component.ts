import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summery',
  templateUrl: './cart-summery.component.html',
  styleUrls: ['./cart-summery.component.scss']
})
export class CartSummeryComponent implements OnInit, OnDestroy {
  count:number;
  amount:number;

  amountSubscription: Subscription;
  countSubscription: Subscription;

  constructor(private cartService: CartService) {
    console.log('cart summery comp created');
    //fixed with BehaviorSubject
    //this.amount = this.cartService.amount;
    //this.count = this.cartService.count;
  }

  ngOnInit() {
    this.amountSubscription = this.cartService.amount$.subscribe((value:number) => {
      this.amount = value;
      console.log('summary subscriber amount',this.amount);
    })
    this.countSubscription = this.cartService.count$.subscribe((value:number) => {
      this.count = value;
      console.log('summary subscriber count',this.count);
    })
  }

  ngOnDestroy(){
    this.amountSubscription.unsubscribe();
    this.countSubscription.unsubscribe();
    console.log('unsubscribed')
  }

}
