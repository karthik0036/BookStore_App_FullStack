import { Component, OnInit } from '@angular/core';
import { Login } from '../../LoginModel';
import { Router } from '@angular/router';
import { InteractionService } from '../../interaction.service';
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



  

  constructor(private router:Router,private service:UserService, private intr:InteractionService) { }

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
          this.token=getData.data;
          localStorage.setItem("token",this.token);
          console.log("Token from login",this.token);
          this.intr.sendToken(this.token);
          this.router.navigate(['dashboard',this.token]);
        });
        console.log("User Logged In Successfully",data); 
      },error=>{
        alert("Invalid username or password");
      });
    }, 1000);
    //this.router.navigate(['dashboard']);
  }

  
}
