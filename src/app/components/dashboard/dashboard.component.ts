import { Component, OnInit } from '@angular/core';
import { Cart } from '../../CartModel';
import { BookService } from '../../book.service';
import { Book } from '../../BookModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { CartService } from '../../cart.service';
import { InteractionService } from '../../interaction.service';

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
  tempProduct:any;
  user:any;
  userid:any;
  //bookId:any;
  carts:any;
  
  cart:Cart = new Cart();
  // cartCount : number = 0;
  token:any = this.route.snapshot.paramMap.get('token');
  selected:boolean=false;
  public TOKEN:any = "";


  constructor(private iteraction:InteractionService,private router:Router,private route:ActivatedRoute,private service:BookService,private userService:UserService,private cartService:CartService) {}

  ngOnInit(): void {

    this.sort="Relevance";

    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);
   

    // this.user=this.token;
    // console.log(this.user);

    this.getCartDetails();


    this.service.getBookRecords().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.books=data.data;
      this.totalBooks=this.books.length;
    });

    this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
       this.user=getData.data;
       console.log(this.user)

      
  });
}
  


  addToCart(Id:any){
    

    // console.log(this.carts.data.length);
      if(this.carts.data.length == 0){
        this.cart.bookid=Id;
        console.log("bookId",this.cart.bookid)
        // this.cart.userid= this.user.userid;
        // console.log("userId",this.cart.userid)
        this.cart.token= this.TOKEN;
        //console.log(this.cart.token);
        console.log("Hello")
        this.cart.quantity=1;
        console.log("quantity",this.cart.quantity)
        console.log(this.cart);
        this.cartService.addCart(this.cart).subscribe((getData:any) =>{
          console.log("Cart Added successfully !");
          this.cart=getData.data;
          window.location.reload();
        });
    }

    else{
      this.cartService.getCartRecordByBookId(Id).subscribe((data:any)=>{
        this.tempProduct=data;
        console.log(this.tempProduct.data);
        if(this.tempProduct.data==null){
          this.cart.bookid=Id;
          console.log("bookid",this.cart.bookid)
          //this.cart.userid=this.userid;
          //console.log("userid",this.cart.userid)
          this.cart.token= this.TOKEN;
          console.log(this.cart.token);
          this.cart.quantity=1;
          //console.log(this.cart);
          this.cartService.addCart(this.cart).subscribe((getData:any) =>{
            console.log("Cart Added !");
            this.cart=getData.data;
            //window.location.reload();
          });
        }
        else{
          
          alert("Book Already present in the cart!!!");
        }
        // window.location.reload();
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


  
  sendToken(){
    console.log("Token on dashboard",this.token);
    this.iteraction.sendMessage(this.token);
  }

 
}
