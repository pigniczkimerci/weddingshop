import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

export interface Termekek {
  cols: number;
  rows: number;
  text: string;
  pic: string;
  price: number;

 }

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  //products:any = [];
  products: Observable<any[]> | undefined;
  dekor: Observable<any[]> | undefined;
  items: any = [];
  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
   /* this.productServices.getProducts().subscribe(res =>{
      console.log("fff: ", res);
      this.products = res;
      
    })*/
    this.products = this.productServices.getProducts();
  }
  addToChart(event: { stopPropagation: () => void; }, product: { id: any; }){
    //console.log(product);
    event.stopPropagation();


    //this.items.push(product);

    this.productServices.addToChart(product);
    //this.productServices.addToChart(product.id);
    //console.log(this.items);
  }

  showDekor(){
    this.products = this.productServices.getDekor();
  }
  showPrice(){
    this.products = this.productServices.getPrice();
  }
}
