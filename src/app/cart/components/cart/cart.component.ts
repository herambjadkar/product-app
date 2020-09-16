import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CartItem } from '../../models/cart-item';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  //Dependency injection
  //angular creates instance for CartService
  //instance for component constructor only
  constructor(private cartService: CartService) {
    console.log("cart component created");
  }

  ngOnInit() {}

  addItem() {
    const id = Math.ceil(Math.random()*1000);
    const cartitem = new CartItem();
    cartitem.id = id;
    cartitem.name = `Product ${id}`;
    cartitem.price = Math.ceil(Math.random()*1000);
    cartitem.quantity= 1;
    this.cartService.addItem(cartitem);
  }

  clear() {
    this.cartService.empty();
  }
}
