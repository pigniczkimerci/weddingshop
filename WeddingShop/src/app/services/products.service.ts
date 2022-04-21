import { Injectable, Query } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import firebase from "firebase/compat/app";
import { ShopComponent } from '../pages/shop/shop.component';
import { FormControl, FormGroup } from '@angular/forms';
const { Storage } = Plugins;

const CART_STORAGE_KEY = "MY_CART";
const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items: any = [];
  cart = new BehaviorSubject({});
  productsCollection: AngularFirestoreCollection;
  cartKey: string = "";

  constructor(private asf: AngularFirestore) {

    this.productsCollection = this.asf.collection("weddingshop");
  }

  ngOnInit(): void {

  }

  getProducts(){
    return this.productsCollection.valueChanges({idField: "id" } );
  }

  getDekor(){
    return this.asf.collection('weddingshop', ref => ref.where('kategoria', '==', "dekor")).valueChanges();
  }
  getPrice(){
    return this.asf.collection('weddingshop', ref => ref.where('ar', '>', 4000).orderBy('ar')).valueChanges();
  }

  addToChart(product: any){
      this.items.push(product);
  }
  getCart(){
    return this.items;
  }

  onCreate(){
    
  }

}
