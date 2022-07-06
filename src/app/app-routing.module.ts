import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"book",component:BookComponent},
  {path:"register",component:UserComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"dashboard/:token",component:DashboardComponent},
  {path:"cart",component:CartComponent},
  {path:"cart/:token",component:CartComponent},
  {path:"wish",component:WishlistComponent},
  {path:"orderSummary",component:OrderSummaryComponent},
  {path:"orderSummary/:token",component:OrderSummaryComponent},
  {path:"order/:Id",component:OrderComponent},
  {path:"order",component:OrderComponent},
  // {path:"update",component:CustomerComponent},
  {path:"customer/:token",component:CustomerComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"profile/:email",component:UserProfileComponent},
  {path:"update/:Id",component:UserComponent},
  {path:"updateUser/:Id", component:UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
