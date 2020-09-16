import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummeryComponent } from './components/cart-summery/cart-summery.component';
// import { CartService } from './services/cart.service';

import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  }
]

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartSummeryComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CartComponent
   ]
  //,
  // providers: [
  //   // for ng 2,4 ,5
  //   // for ng 6 onwards, not needed
  //   CartService
  // ]
})
export class CartModule { }
