import { Component, OnInit } from '@angular/core';
import { Cart } from '../../CartModel';
import { BookService } from '../../book.service';
import { Book } from '../../BookModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any;
  totalBooks: number = 10;
  search:any;
  sort!:string;

  userId:any;
  carts:any;
  cart:Cart =  new Cart(0,0,0);
  // cartCount : number = 0;
  token=this.route.snapshot.paramMap.get("token");


  constructor(private router:Router,private route:ActivatedRoute,private service:BookService,private userService:UserService,private cartService:CartService) {}

  ngOnInit(): void {
    this.service.getBookRecords().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.books=data.data;
      this.totalBooks=this.books.length;
    });

    this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
       this.userId=getData.data;
  });

    this.getCartDetails();
    
  }

  addToCart(bookId: number){
    let i = 0
    if (this.carts.data != 0) {
      for (; i < this.carts.data.length; i++) {
        if (this.carts.data[i].book.bookId == bookId) {
          alert("book is already in cart");

          break;
        }
      }
      if (i == this.carts.data.length) {
        this.cart.bookId = bookId;
        this.cart.userId = this.userId;
        this.cart.quantity = 1;
        this.cartService.addCart(this.cart).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();

        });
      }
    } else {
      this.cart.bookId = bookId;
      this.cart.userId = this.userId;
      this.cart.quantity = 1;
      this.cartService.addCart(this.cart).subscribe((getdata: any) => {
        this.carts = getdata;
        window.location.reload();
      });
    }
  }

  
  goToCart() {
    console.log(this.token)
    this.router.navigate(['/cart',this.token]);
    // ,this.token
  }

  tologinPage() {
    this.router.navigate(["login"]);

  }

  getCartDetails(){
    console.log("checked cart");
    this.cartService.getAllCartRecords().subscribe((mydata:any) => {
      this.carts = mydata;
    });
  }

  displayBook(){
    this.service.getBookRecordByBookName(this.search).subscribe((getData:any)=>{
      console.log("Book record retrieved");
      this.books=getData.data;
      console.log("Book record retrieved",getData);
    });
 
  }

  sortAsc(){
    this.service.sortAscByPrice().subscribe((data:any)=>{
      console.log("sorted in ascending order of price");
      this.books=data.data;
      console.log("data asc",data);
    })
};
sortDesc(){
  this.service.sortDescByPrice().subscribe((data:any)=>{
    console.log("sorted in descending order of price");
    this.books=data.data;
    console.log("data desc",data);
  })
};


onChange(){
  if(this.sort=="Descending"){
    this.sortDesc();
  }
  if(this.sort=="Ascending"){
    this.sortAsc();
  }
  if(this.sort=="Relevance"){
    this.service.getBookRecords().subscribe(data=>{
      console.log("Book Data retrieved successfully");
      this.books=data;
    });
  }}


  

  // isAdded(id:any) {
  //   var doesExist = this.cartList?.some(function(a:any) {
  //     return a.book.bookId === id;
  // });
  // return doesExist;
  
  // }

 
}
