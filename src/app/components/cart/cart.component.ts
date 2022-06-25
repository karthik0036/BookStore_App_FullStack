import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { UserService } from '../../user.service';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private bookService:BookService,private userService:UserService,private service:CartService,private route:ActivatedRoute) { }
  cart:any;
  user:any;
  book:any;
  token=this.route.snapshot.paramMap.get('token');

  ngOnInit(): void {
    // this.service.getAllCartRecords().subscribe((getData:any)=>{
    //       console.log("Cart Data Retrieved successfully",getData);
    //       this.cart=getData;
    //    });
    this.service.getAllCartRecords().subscribe((getData: any) => {
      if (getData.data.length == undefined) {
        this.router.navigate(["dashboard",this.token]);
      }
      this.cart = getData;
      this.user = this.cart.data[0].user.userId;

    })

  //   this.userService.getUserRecordByToken(this.token).subscribe((data:any)=>{
  //     console.log("User data retrieved successfully for given token",data);
  //     this.user=data;
  //     this.service.getCartRecordByUserId(this.user.data.userId).subscribe((getData:any)=>{
  //      console.log("Cart Data Retrieved successfully",getData);
  //      this.cart=getData;
  //   });
  //   });

  //   this.bookService.getBookRecordById(this.cart.data.bookId).subscribe((data:any)=>{
  //     console.log("Book data retrieved",data);
  //     this.book = data;
  //   })
  }

  toDashboard(){
    this.router.navigate(["dashboard",this.token])
  }

  deleteCart(cartId: number) {
    this.service.deleteCartByCartId(cartId).subscribe((data:any) => {
      window.location.reload()

    });
  }

  updateCartadd(cartId: number, cart: any) {
    cart.quantity = cart.quantity + 1;
    this.service.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
    });

  }

  updateCartsubstract(cartId: number, cart: any) {
    cart.quantity = cart.quantity - 1;
    this.service.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
    });

  }

  goToCustomerDetails() {
    this.router.navigate(["update", this.token]);

  }
 
}

