import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenarray',
  templateUrl: './evenarray.component.html',
  styleUrls: ['./evenarray.component.css']
})
export class EvenarrayComponent implements OnInit {

  c:number | undefined;
   
  arrayz:number[]=new Array();
  even:number[]=new Array();
  ec: any;
  evenarray():any{
    this.ec=0;
    for(let i=0;i<5;i++){
      this.c=Math.floor(Math.random() * 100) + 1;
      this.arrayz[i]=this.c;
      if(this.c%2===0){
        this.even[this.ec]=this.c;
        this.ec=this.ec+1;
      }
    } 
    return [this.arrayz,this.even];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function random(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}

