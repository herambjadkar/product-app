import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  @ViewChild("productForm",{static: true})
  form: NgForm; // directive instance

  @ViewChild("productName",{static: true})
  elementName: ElementRef; // wrapper for DOM element

  product = new Product(); // for create
  brand$ : Observable<Brand[]>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    // set focus on input element
    // nativeElement is DOM element
    // Here input tag, which has focus method
    this.elementName.nativeElement.focus();

    // 'path' : edit:id
    const id = this.route.snapshot.params['id'];

    // matrix url data source:list
    const source = this.route.snapshot.params['source'];


    if(id){
      console.log('edit product',id);
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    }else{
      console.log('create new product');
    }
    this.brand$ = this.productService.getBrands();
  }

  save(){
    console.log('product details', this.product);
    this.productService.saveProduct(this.product).subscribe(savedProduct => {
      console.log('saved product',savedProduct);
      this.product = savedProduct;
    })
  }
  isSaved():boolean{
    return this.form.pristine;
  }
}
