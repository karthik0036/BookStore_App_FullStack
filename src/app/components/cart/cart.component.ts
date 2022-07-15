import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { UserService } from '../../user.service';
import { BookService } from '../../book.service';
import { OrderService } from '../../order.service';
import { Order } from '../../OrderModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private orderService:OrderService,private router:Router,private bookService:BookService,private userService:UserService,private service:CartService,private route:ActivatedRoute) { }
  cart:any;
  user:any;
  book:any;
  quantity:any;
  token:any=this.route.snapshot.paramMap.get('token');

  orderSummary=false;
  order:Order= new Order();
  public TOKEN:any = "";

  ngOnInit(): void {

    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);
    
    this.service.getAllCartRecords().subscribe((getData: any) => {
      if (getData.data.length == undefined) {
        this.router.navigate(["dashboard",this.token]);
      }
      this.cart = getData;
      console.log(this.cart);
      this.user = this.cart.data[0].user.userid;
      console.log("userid is ", this.user);

    })

    

    
    
 
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
    this.router.navigate(["update", this.TOKEN]);

  }
  
  placeOrder(){
    // console.log("data",this.cart.data.book.data.bookID);
    // this.customerDetails=true;
    for(let i=0;i< this.cart.data.length;i++){
      this.order.token=this.TOKEN;
      this.order.userid=this.cart.data[i].user.userid;
      this.order.bookid=this.cart.data[i].book.bookid;
      this.order.quantity=this.cart.data[i].quantity;
      this.order.price=this.cart.data[i].price ;
      this.order.address=this.cart.data[i].user.address;
      console.log(this.order.address);
      this.order.cancel=false;
      this.orderService.postOrder(this.order).subscribe((getData:any)=>{
        console.log("Order Placed !",getData);
        this.order=getData;
        console.log(this.order);
        });
        // this.router.navigate(['customer',this.token]);

      this.service.deleteCartByCartId(this.cart.data[i].cartId).subscribe(data=>{
      console.log("Cart removed !");
    })
    }
    this.router.navigate(['customer',this.TOKEN]);

  }

  
 
}

