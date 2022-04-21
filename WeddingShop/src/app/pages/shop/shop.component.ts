import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { v4 as uuidv4} from "uuid";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any[] | undefined;
  productsQ: Observable<any[]> | undefined;
  dekor: Observable<any[]> | undefined;
  items: any = [];
  formCreate = new FormGroup({
    newNev: new FormControl(''),
    newAr: new FormControl(''),
    newKep: new FormControl(''),
    newKat: new FormControl(''),
  })
  formUpdate= new FormGroup({
    updateId: new FormControl(''),
    updateNev: new FormControl(''),
    updateAr: new FormControl(''),
  })
  formDelete = new FormGroup({
    deleteId: new FormControl('')
  })
  mybreakpoint: number | undefined;
  
  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
    this.productsQ = this.productServices.getProducts();
    this.showAll();
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 4;
  }
  handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 1300) ? 1 : 4;
  }
  addToChart(event: { stopPropagation: () => void; }, product: { id: any; }){
    event.stopPropagation();
    this.productServices.addToChart(product);
  }
  showAll(){
    this.productServices.getProducts().subscribe((res) => {
      this.products = res;
    })
  }
  showDekor(){
    this.productServices.getDekor().subscribe((res) => {
      this.products = res;
    })
  }

  showPrice(){
    this.productServices.getPrice().subscribe((res) => {
      this.products = res;
    })
  }

  async create(){
    return new Promise((resolve, reject) => 
      this.productServices.productsCollection.add({
          nev: this.formCreate.value.newNev,
          ar : this.formCreate.value.newAr,
          kep: this.formCreate.value.newKep,
          kat: this.formCreate.value.newKat
      })
      .then(res => {
          this.formCreate.reset();
      })
      .catch(e => {
          reject();
    }));
  }

  async update(){
    return new Promise((resolve, reject) => 
      this.productServices.productsCollection.doc(this.formUpdate.value.updateId).update({
        nev: this.formUpdate.value.updateNev,
        ar: this.formUpdate.value.updateAr,
      }).then(res => {
        this.formUpdate.reset();
      }).catch(e =>{
        reject();
    }));
  }

  async delete(){
    return new Promise((resolve, reject) => 
    this.productServices.productsCollection.doc(this.formDelete.value.deleteId).delete()
    ).then(re =>{
      this.formDelete.reset();
    });
  }


}
