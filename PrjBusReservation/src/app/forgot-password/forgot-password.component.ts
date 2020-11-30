// import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../Services/login.service';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent implements OnInit {
//   user:User;
//  username;
//   securityquestion;
//   changepasswords;
//   result1;

//   constructor(private loginService:LoginService) {
//     this.changepasswords=[];
//     this.user=new User();
//   }

//   verifying(){
//     //  console.log(this.user.SecurityQuestion);
//     this.loginService.getChangePassword(this.user).subscribe((data)=>{
//       console.log(this.user);
//       //console.log(data);
//       this.result1="Enter new password";
//       //this.user=new User();
//   })
//       // this.result1="Incorrect Username or security answer";
//       // this.user.SecurityQuestion=null;
//     }
//     forgotPassword(){
//     //console.log(this.user); 
//     this.loginService.putUser(this.user.UID,this.user).subscribe(
//       success=>alert("done"),
//       error=>alert(error));
//     }

//   ngOnInit(): void {
//   }

// }
