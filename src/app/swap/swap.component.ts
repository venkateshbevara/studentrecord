import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {


   first :any;
   second:any;
   data:[number, number] | undefined;
   temp:any;
swap(a:any,b:any):any {    
      
      this.data=[b,a]
      //console.log("swapped numbers")
      this.temp="swapped numbers :"
      return [this.data,this.temp];
}






  constructor() { }

  ngOnInit(): void {
  }

}
