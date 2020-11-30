import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private userrouter: Router) { }

  emp: any = {};
  loginstatus;
  loggedinempdetails:any={};
  ngOnInit() {
  }
  err;
  doLogin() {
    //debugger;
    //console.log(this.emp);
    //Admin
    if (this.emp.Email == "busreservationteam2020@gmail.com" && this.emp.Password == "Admin@12345") {
      debugger;
      this.loginservice.loginuservariable = true;
      sessionStorage.setItem('username', 'admin')
      //to check any user is logged in or not 
      this.loginservice.loginCheck();
      this.userrouter.navigate(['/adminlayout']);

    }

    else if (this.emp != null) 
    {
      debugger;
      this.loginservice.empLogin(this.emp).subscribe((data) => {
        this.loggedinempdetails = data;
        debugger;
        console.log(this.loggedinempdetails);
        sessionStorage.setItem('Email', this.loggedinempdetails);
        //to check any user is logged in or not 
        this.loginservice.loginCheck();
         if(data!='Invalid')
         {
        this.loginservice.loginuservariable = true;
        this.userrouter.navigate(['/userlayout']);

         }

         else
         {
           this.userrouter.navigate(['/login']);
           this.err="Invalid Email_id or Password!!!";
         }
      });
    }
    else 
    {
      debugger;
      this.err = "Please enter valid creditianls!!!";
    }
  }
}
