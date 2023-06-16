import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopComponent } from '../shop/shop.component';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  cart: Array<Cart> = [];
  cart_original: Array<Cart> = [];
  num: Array<number> = [];
  cartNumber!: number;
  constructor(private productServices: ProductsService) {
    
  }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
    //this.cart_original = JSON.parse(sessionStorage.getItem("cart") || '[]');
    this.productServices.getProducts().subscribe((products: Product[]) => {
      this.cart_original = products.map(product => ({
        ...product,
        mennyiseg: 1
      })) as Cart[];
    });
    this.num = this.productServices.sum();
    this.cartNumber = this.num[this.num.length -1];
  }
  ngAfterViewInit(){
    this.productServices.total = 0;
  }
  toClear(){
    this.productServices.clear();
    window.location.reload();
    alert("Sikeres rendelés! A rendelésed 23642398632489 nap múlva érkezik!")
  }
  getProductQuantity(productId: number): number {
    return this.cart.filter((product) => product.id === productId).length;
  }
  addItem(product: Cart){
    const existingItem = this.cart.find(item => item.id === product.id);
    const foundItem = this.cart_original.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.mennyiseg += 1;
      existingItem.ar += foundItem!.ar;
      this.cartNumber += foundItem!.ar;
    } else {
      product.mennyiseg = 1;
      this.cart.push(product);
    }

    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }
  removeItem(product: Cart){
    const existingItem = this.cart.find(item => item.id === product.id);
    const foundItem = this.cart_original.find(item => item.id === product.id);
    if (existingItem && product.ar > 0) {
      existingItem.mennyiseg -= 1;
      existingItem.ar -= foundItem!.ar;
      this.cartNumber -= foundItem!.ar;
    }
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }
  deleteItem(product:Cart){
    this.cart = this.cart.filter((item) => item.id !== product.id);
    this.cartNumber -= product!.ar;
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }
  groupProductsByProductId(products: any[]){
    console.log(products)
    return products;
  }
}

