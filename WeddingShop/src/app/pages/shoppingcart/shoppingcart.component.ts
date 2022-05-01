import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingbagComponent implements OnInit {

  cart: any = [];
  cartNumber: number = 0;
  constructor(private productServices: ProductsService) {
    
  }

  ngOnInit(): void {
    this.cart = this.productServices.items;
    this.cartNumber = this.productServices.sum();
    console.log(this.productServices.cartItems)
  }
  ngAfterViewInit(){
    this.productServices.total = 0;
  }
}
