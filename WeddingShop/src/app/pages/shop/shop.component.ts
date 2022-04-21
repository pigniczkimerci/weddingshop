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
  products: Observable<any[]> | undefined;
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
    this.products = this.productServices.getProducts();
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
    this.products = this.productServices.getProducts();
  }
  showDekor(){
    this.products = this.productServices.getDekor();
  }

  showPrice(){
    this.products = this.productServices.getPrice();
  }

  create(){
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
        console.log(e);
    })
  }

  update(){
    this.productServices.productsCollection.doc(this.formUpdate.value.updateId).update({
       nev: this.formUpdate.value.updateNev,
       ar: this.formUpdate.value.updateAr
      }).then(res => {
        this.formUpdate.reset();
    });
  }

  delete(){
    if (confirm('Delete?')) {
      this.productServices.productsCollection.doc(this.formDelete.value.deleteId).delete();
    }
    this.formDelete.reset();
  }


}
