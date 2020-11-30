import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice:LoginService) { }
  
  usersessionvariable;
  username;

  ngOnInit(): void {
    this.username=this.loginservice.loginuser;
    this.usersessionvariable=this.loginservice.loginuservariable;
console.log("home oninit");
  }

  logOff()
  {
    debugger;
    this.loginservice.dologoff();
    
    this.usersessionvariable=this.loginservice.loginuservariable;
    //this.userrouter.navigate(['/home']);
  }
  

}
