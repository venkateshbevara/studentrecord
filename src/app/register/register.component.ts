import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '../login/facebook';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  facebook :Facebook={
    username: undefined,
    password: undefined,
    profilepic: undefined
  };
  constructor(private router:Router,private userservice:UserserviceService) { }
  
  register(){ 
    this.userservice.postuserdata(this.facebook).subscribe(data=>
      alert("registered successfully!"));
  }
  login(){
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
