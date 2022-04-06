import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingbagComponent } from './pages/shoppingbag/shoppingbag.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { FirebaseService } from './services/firebase.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    ShoppingbagComponent,
    SignupComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyCu0uqzyieykHN8ZG9jDKlRyvZCTMXTHcI",
                                    authDomain: "fir-angular-cbe7c.firebaseapp.com",
                                    projectId: "fir-angular-cbe7c",
                                    storageBucket: "fir-angular-cbe7c.appspot.com",
                                    messagingSenderId: "993850649502",
                                    appId: "1:993850649502:web:e5e89fe492d30723b9c48f"})
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

