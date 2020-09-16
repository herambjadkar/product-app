import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  counter:number = 2;
  timerHandle:any;
  constructor() { }

  ngOnInit() {
    // this.timerHandle = setInterval(()=>{
    //   this.counter++;
    //   console.log('counter is ',this.counter);
    // },1000);
  }

  ngOnDestroy(){
    console.log('counter component destroyed, timer cleared')
    clearInterval(this.timerHandle);
  }

  increment(e: Event){
    //console.trace();//dont do this
    //console.log("Event",e);
    this.counter++
  }
}
