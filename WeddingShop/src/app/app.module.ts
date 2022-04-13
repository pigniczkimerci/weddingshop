import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../app/auth/auth.service.ts.service';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingbagComponent } from './pages/shoppingbag/shoppingbag.component';

import { FooterComponent } from './footer/footer.component';
import { FirebaseService } from './services/firebase.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormatPipe } from './pipe/format.pipe';
import { ProductsService } from './services/products.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    ShoppingbagComponent,
    SignupComponent,
    FooterComponent,
    LogoutComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonToggleModule,
    MatRadioModule,
    HttpClientModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService,AuthService, AuthGuard, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

