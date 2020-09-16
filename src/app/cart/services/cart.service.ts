import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})


export class CartService {
  private _cartItems: CartItem[] = [];
  private _amount = 0; // total amount
  private _count = 0; // total count

  public amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  public count$: BehaviorSubject<number> = new BehaviorSubject(this._count);

  //session per tab
  //storage:Storage = window.sessionStorage;
  storage:Storage = window.localStorage;

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items: CartItem[]) {
    this._cartItems = items;
  }

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.count$.next(this._count);
  }

  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    //publishing the value to subscriber
    this.amount$.next(this._amount);
  }

  calculate(): void {
    //local function variables
    let amount = 0;
    let count = 0;
    for (let cartItem of this._cartItems) {
      amount += cartItem.price * cartItem.quantity;
      count += cartItem.quantity;
    }

    this.amount = amount;
    this.count = count;
  }

  addItem(cartItem: CartItem) {
    this._cartItems.push(cartItem);
    this.calculate();
    this.storage.setItem('cartItem',JSON.stringify(this._cartItems));
  }

  removeItem(id:number){
    const index = this._cartItems.findIndex(item => item.id === id)
    this._cartItems.splice(index,1);
    this.calculate();
    this.storage.setItem('cartItem',JSON.stringify(this._cartItems))
  }

  empty(){
    this._cartItems.splice(0, this._cartItems.length);
    this.calculate();
    this.storage.removeItem('cartItem')
  }

  constructor() {
    //console.log("cartItems");
    window.onstorage = () => {
      const strData = this.storage.getItem('cartItem');
      console.log('storage changed',strData);
      if(strData){
        this._cartItems = JSON.parse(strData);
      }
    };
  }
}
