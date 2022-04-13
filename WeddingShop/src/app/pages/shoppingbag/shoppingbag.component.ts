import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrls: ['./shoppingbag.component.scss']
})
export class ShoppingbagComponent implements OnInit {

  cart: any = [];

  constructor(private productServices: ProductsService) {
    
   }

  ngOnInit(): void {
   //console.log(this.productServices.addToChart("Mn3AwL0U99B81PA1S1Vu"))
   //console.log(this.productServices.items)

    this.cart = this.productServices.items;

  }

}
