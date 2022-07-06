import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User} from '../../UserModel';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  
  user: any;
  
  // getting the user id from the parameter 
  token:any=this.route.snapshot.paramMap.get('token');
  userid:any;
  Id:any=this.route.snapshot.paramMap.get('Id');
  public TOKEN:any = "";
  constructor(private route: ActivatedRoute, private router: Router, private userService:UserService) { }

  ngOnInit(): void {

    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);

    // this.userService.getUserRecordByToken(this.TOKEN).subscribe((data:any)=>{
    //   this.user=data.data.userid;  

    //   this.userService.getUserRecordById(this.Id).subscribe((getData: any) => {
    //     this.user = getData.data;
    //   });
    // });

    this.userService.getUserRecordByToken(this.TOKEN).subscribe((getData:any)=>{
      console.log("Data retrieved for user",getData);
      this.user=getData.data[0];
      console.log(this.user);
    })
  }

  updateUser() {
    //console.log(this.user);
    this.userService.updateUserRecordById(this.TOKEN, this.user).subscribe((data:any) => {
      console.log(this.TOKEN);
      console.log("User record got updated",data);
      //this.router.navigate(['orderSummary']);
        this.router.navigate(["orderSummary",this.TOKEN]);
    })
  }

}
