import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Facebook } from './facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  facebook: Facebook={
    username: "venky2",
    password: "venky2",
    profilepic: "venky3"
  }
  getData: any;
  getpass:any;
  constructor(private userservice:UserserviceService,private router :Router) { }
  register() {
   this.router.navigate(['/register'])
  }
  getpassword(){
    var user=this.facebook.username;
    this.userservice.getuserpassword(user).subscribe(data=>{
      this.getpass=data.username;
      alert(this.getpass);
    })
  }
  loginvalid(){
  var user=this.facebook.username;
  var password=this.facebook.password;
  this.userservice.getuserdata(user,password).subscribe((res:any)=>{
   this.getData=res;
   if(this.getData==true){
      alert("Welcome"+this.facebook.username
      );
      this.router.navigate(["/home"]);
   }
   else{
    alert("Invalid username/passsword")
   }
  })


  }
  ngOnInit(): void {
  }

}
