import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent {
  title = 'All Mart';
  
  private username: string = '' ;
  private password: string = '' ;

  constructor(private router: Router) { }

  onClick(username,password) {
    if(username=="belphy" && password=="123"||
      username=="gayathri" && password=="456"){
      alert("Login Successful");
      this.router.navigate(["./products"]);

    }
    else{
      alert("Enter valid credentials")
    }
      
    }
   
  

}
