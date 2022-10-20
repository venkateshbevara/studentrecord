import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
s:String ="happy";
username="";
  constructor() { }

  onClick(message: String){
    this.s=message;
  }
  ngOnInit(): void {
  }

}
