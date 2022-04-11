import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Plugins } from '@capacitor/core';
import firebase from "firebase/compat/app";
import { ShopComponent } from '../pages/shop/shop.component';
const { Storage } = Plugins;

const CART_STORAGE_KEY = "MY_CART";
const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cart = new BehaviorSubject({});
  productsCollection: AngularFirestoreCollection;
  cartKey: string = "";
 // items!: ShopComponent;
  constructor(private asf: AngularFirestore) {

    this.productsCollection = this.asf.collection("weddingshop");
    //this.loadCard();
    
  }

  ngOnInit(): void {
  }

  getProducts(){
    return this.productsCollection.valueChanges({idField: "id" } );
  }

  /*async loadCard(){
    const res = await Storage['get']({key: CART_STORAGE_KEY});
    if(res.value){
      this.cartKey = res.value;
      this.asf.collection("carts").doc(this.cartKey).valueChanges().subscribe((result: any) =>{
        console.log("megváltoztott", result)
      })
      //már van cart
      console.log("dd")
    }else{
     /* const fbDocument = await this.asf.collection("cart").add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log("new c", fbDocument);
      this.cartKey = fbDocument.id;
      await Storage['set']({key: CART_STORAGE_KEY, value: this.cartKey})*/
 //   }
  //}

  addToChart(id:any){
      this.asf.collection("carts").doc(this.cartKey).update({
        [id]: INCREMENT,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      this.productsCollection.doc(id).update({
        stock: DECREMENT
      });
  }

}
