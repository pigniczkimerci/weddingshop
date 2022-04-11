import { Component, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrls: ['./shoppingbag.component.scss']
})
export class ShoppingbagComponent implements OnInit {

 

  constructor(public shop: ShopComponent) { }

  ngOnInit(): void {
    console.log(this.shop.items);
  }

}
