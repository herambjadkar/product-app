import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { CartService } from "src/app/cart/services/cart.service";
import { Observable, from } from "rxjs";
import { Product } from "../../models/product";
import { CartItem } from 'src/app/cart/models/cart-item';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  fieldName:string;
  operator:string;
  expectedValue:number;

  constructor(private productService: ProductService,private cartService: CartService){

  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product$){
    const cartitem = new CartItem();
    cartitem.id = product$.id;
    cartitem.name = product$.name;
    cartitem.price = product$.price;
    cartitem.quantity= 1;
    this.cartService.addItem(cartitem);
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((obj)=>{
      console.log('product deleted');
      //get updated list
      this.products$ = this.productService.getProducts();
    })
  }
}
