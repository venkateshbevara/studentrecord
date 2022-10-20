import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
   
  public status="false"
  constructor() { }

  ngOnInit(): void {
  }
   
   onSubmit(formValue:any){
    console.log(formValue);
   }
  }

  

  



