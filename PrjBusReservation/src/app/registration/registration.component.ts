import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { RegisterModel } from '../Models/Register.model';
import { MustMatch } from '../mustmatch';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  pwdpattern="^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,15}$";
  registerForm: FormGroup;
  submitted = false; 
  newuser:RegisterModel;
  result:any=[];
  RegistrationService: any;

  constructor(private formBuilder:FormBuilder) { }

  onSubmit(userform:NgForm)
  {
    console.log(userform.value)
    this.RegistrationService.registeruser(this.newuser).subscribe((data)=>{this.result.data;})
    alert ('Successfully Submitted!');
    
  }


  ngOnInit(): void {
    {
      this.newuser ={
        First_Name: "",
        User_Name: "",
        Email: "",
        Password: "",
        Age:null,
        Gender: "",
        Phone_Number:null,
    },
    {validator: MustMatch('password', 'confirmPassword')}
  }
  }

}
