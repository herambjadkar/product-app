import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { map, filter, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  product$:Observable<Product[]>;
  searchtext:string;

  group: FormGroup;
  searchControl: FormControl;

  constructor(private productService: ProductService, private builder: FormBuilder) {
        this.searchControl = new FormControl('samsung');
        this.group = this.builder.group({
          //html binding name : control object
          'search': this.searchControl
        })
     }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(filter (value => !!value)) //non empty strings are true
    .pipe(map (value => value.trim().toLowerCase()))
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log('*'+value+'*')

      this.product$ = this.productService.searchProducts(value);
    })
  }

  reset(){
    this.searchControl.setValue('');
  }
}
