import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    UserComponent,
    CartComponent,
    OrderComponent,
    UserProfileComponent,
    OrderSummaryComponent,
    CustomerComponent,
    LoginComponent,
    WishlistComponent,
    ChangePasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
