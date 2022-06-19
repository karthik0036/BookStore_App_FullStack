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

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"book",component:BookComponent},
  {path:"register",component:UserComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"cart",component:CartComponent},
  {path:"wish",component:WishlistComponent},
  {path:"orderSummary",component:OrderSummaryComponent},
  {path:"order",component:OrderComponent},
  {path:"customer",component:CustomerComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
