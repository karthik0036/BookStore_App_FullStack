import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { BookService } from '../../book.service';
import { CartService } from '../../cart.service';
import { Order } from '../../OrderModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  book:any;
  order:any;
  bookid:any;
  amount:any;

  //order: Order = new Order();
  // To get the all cart details form database 
  cart!: any;

  constructor(private cartService:BookService,private bookService:BookService,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {

    

    this.orderService.getAllOrders().subscribe((getData:any)=>{
      console.log("order Data Retrieved successfully",getData);
      this.order=getData;
   });
   this.bookService.getBookRecordById(this.order.bookid).subscribe((data:any)=>{
    console.log("Book data retrieved",data);
    //console.log(this.order.data.bookid.bookid);
    this.book = data.data;
  })

  this.money();

    
  }

  orderDetails(){
    this.router.navigate(['order']);
  }

  money(){
    this.orderService.getTotalPrice().subscribe((data:any)=>{
      console.log("Data",data);
      this.amount = data;
      console.log("Money",this.amount);
    })
  }

}
