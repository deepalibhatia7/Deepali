import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.css']
})
export class UserlayoutComponent implements OnInit {

  constructor(private loginservice:LoginService,private userrouter:Router) { }
  usercheck;
  ngOnInit(): void {
    //To avoid calling the method through url
    if(this.loginservice.loginsessionvariable)
    {
      this.usercheck=true;
    }
    else
    {
      this.usercheck=false;
      this.userrouter.navigate(['/home']);
    }
 }

 //calling dologoff method from loginservice
 logOff()
 {
   debugger;
   this.loginservice.dologoff();
  
 }
  


}
