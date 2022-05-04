import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  cart: any = [];
  num: any = [];
  cartNumber: string | null | undefined;
  obj: any;
  constructor(private productServices: ProductsService) {
    
  }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
    this.num = this.productServices.sum();
    this.cartNumber = this.num[this.num.length -1];
  }
  ngAfterViewInit(){
    this.productServices.total = 0;
  }
  toClear(){
    this.productServices.clear();
    window.location.reload();
  }
}
