import { Component, OnInit } from '@angular/core';
import { Login } from '../../LoginModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login =  new Login('','');

  constructor() { }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.login)
  }

}
