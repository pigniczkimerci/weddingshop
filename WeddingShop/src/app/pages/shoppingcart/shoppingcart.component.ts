import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingbagComponent implements OnInit {

  cart: any = [];

  constructor(private productServices: ProductsService) {
    
   }

  ngOnInit(): void {
    this.cart = this.productServices.items;

  }

}
