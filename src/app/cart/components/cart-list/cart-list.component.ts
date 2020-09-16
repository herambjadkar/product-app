import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CartItem } from '../../models/cart-item';

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"]
})
export class CartListComponent implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService) {
    console.log("cart list comp created");
    this.cartItems = this.cartService.cartItems;
  }

  removeItem(id){
    this.cartService.removeItem(id);
  }
  ngOnInit() {}
}
