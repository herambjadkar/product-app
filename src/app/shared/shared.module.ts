import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    // private to local module
    AddressComponent,
    LikeComponent,
    FilterPipe,
    PowerPipe,
    SortPipe,
    HighlightDirective
    // private components.....
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //make components, directives, piles
    // work in other modules as public
    AddressComponent,
    LikeComponent,
    FilterPipe,
    PowerPipe,
    SortPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
