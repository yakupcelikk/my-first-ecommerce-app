import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })



  }
  addToCart(product: any) {
    //alert("Sepete Eklendi "+product.name)
    this.alertifyService.success(product.name + " added")
    // this.alertifyService.error(product.name+ " error")
    // this.alertifyService.warning(product.name+ " warning")
  }

}
