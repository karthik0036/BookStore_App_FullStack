import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  user: any;
  // getting the user id from the parameter 
  usertoken: any = this.route.snapshot.paramMap.get('token');
  userId:any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserRecordByToken(this.usertoken).subscribe((data:any)=>{
      this.userId=data.data.userId;  

      this.userService.getUserRecordById(this.userId).subscribe((getData: any) => {
        this.user = getData.data;
      });
    });
  }

  updateUser() {
    this.userService.updateUserRecordById(this.user.userId, this.user).subscribe(data => {
      this.router.navigate(["orderSummary",this.usertoken]);
    })
  }

}
