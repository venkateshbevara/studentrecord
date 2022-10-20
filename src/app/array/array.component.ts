import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  arrayz:number[]=new Array();
  array():any{
   for(let i=0;i<5;i++){
    this.arrayz[i]=Math.floor(Math.random() * 100) + 1;
   }
   return [this.arrayz];
}

  constructor() { }

  ngOnInit(): void {
  }

}
