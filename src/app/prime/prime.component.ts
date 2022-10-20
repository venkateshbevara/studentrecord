import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  a:any;
  value:any;
prime(a:number):any {
        for(let i=2;i<this.a;i++)
        {
         if(this.a%2===0){
           return this.value="it is not a prime";
         }      
        }
        return this.value="it is a prime";
}
  constructor() { }
  ngOnInit(): void {
  }

}
