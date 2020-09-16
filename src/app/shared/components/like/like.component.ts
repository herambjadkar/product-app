import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  //[(Likes)]

  isMouseOver = false;
  @Input()
   likes:number;

  //eventName should be inputName + "change"
  @Output()
   likesChange:EventEmitter<number> = new EventEmitter();

  constructor() { }
  up(){
    this.likesChange.emit(this.likes + 1);
  }
  down(){
    this.likesChange.emit(this.likes - 1);
  }
}
