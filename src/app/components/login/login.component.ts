import { Component, OnInit } from '@angular/core';
import { Login } from '../../LoginModel';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Token to set in request param
  token:any;
  // To store the status of login weather sucussfull or wrong email or wrong password
  status: any;

  login:Login =  new Login('','');
  registerData=false;

  // To store the user entered  email for login from ng model
  email!: string;

  // To store user enterd password for login from ngModel 
  password!: string;

  // to store the logined in user user id to pass later into param  
  userId!: any

  

  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['register']);
  }

  signIn(){
    console.log(this.login)
    this.registerData=true;
     setTimeout (() => {
      this.service.userLogin(this.login).subscribe((data:any)=>{
        this.service.getToken(this.login.email).subscribe((getData:any)=>{
          console.log("Token retrieved successfully",getData);
          this.token=getData;
          console.log("Token from login",this.token.data);
          // this.interaction.sendToken(this.token.data);
          this.router.navigate(['dashboard',this.token.data]);
        });
        console.log("User Logged In Successfully",data); 
      },error=>{
        alert("Invalid username or password");
      });
    }, 1000);
    //this.router.navigate(['dashboard']);
  }

  // submitTestLoginStatus() {
  //   this.service.getloginStatus(this.email,this.password).subscribe((getData: any) => {
  //     this.status = getData;
  //   });
  //   if (this.status == 1) {
  //     alert("Login successful , PLEASE WAIT");

  //     this.service.getUserRecordByEmail(this.email).subscribe((getData: any) => {
  //       this.userId = getData;
  //     });
  //     this.service.getToken(this.email).subscribe((data: any) => {
  //       this.token = data.data;
  //       this.router.navigate(["dashboard", this.token]);
  //     });
  //   }
  //   if (this.status == 0) {
  //     console.log("invalid user email");
  //   }
  //   if (this.status == 2) {
  //     console.log("invalid user password");
  //   }


  // }

}
