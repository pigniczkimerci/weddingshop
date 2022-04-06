import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingbagComponent } from './pages/shoppingbag/shoppingbag.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"shop", component:ShopComponent},
  {path:"shoppingbag", component:ShoppingbagComponent},
  {path:"signup", component:SignupComponent},
  {path:"registration", component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
