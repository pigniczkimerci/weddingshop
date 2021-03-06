import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthService } from './auth/auth.service.ts.service';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {
    path:"shop", 
    component:ShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"shoppingcart", 
    component:ShoppingcartComponent,
    canActivate: [AuthGuard]
  },
  {path:"signup", component:SignupComponent},
  {
    path:"logout", 
    component:LogoutComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
