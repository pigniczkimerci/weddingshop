import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    this.cart = this.productServices.cartItems;
    this.cartNumber = this.productServices.sum();
  }
  ngAfterViewInit(){
    this.productServices.total = 0;
  }
  toClear(){
    this.productServices.clear();
    window.location.reload();
  }
}
