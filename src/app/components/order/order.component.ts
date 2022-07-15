import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Order } from 'src/app/Model/Order';
import { OrderService } from '../../order.service';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order:any;
  email:any;
  token:any;

  constructor(private router:Router,private service:OrderService,private userService:UserService) {}

  ngOnInit(): void {

    this.service.getAllOrders().subscribe(data=>{
      console.log("Orders retrieved successfully",data);
      this.order=data;
      this.email=this.order.data[0].userid.email;
      console.log(this.email);
      this.userService.getToken(this.email).subscribe((getData:any)=>{
        console.log("Token retrieved successfully");
        this.token=getData.data;
      })
    })
  }

 

  toDash(){
    for(let i=0;i<this.order.data.length;i++){
      this.service.deleteOrderRecordById(this.order.data[i].id).subscribe(data=>{
        console.log(data);
        
        // this.router.navigate(['dashboard',this.token]);
      });
    }
      this.router.navigate(['dashboard',this.token]);
  
    }
}
