import { Directive, OnInit, OnDestroy, ElementRef, HostListener, Renderer2, Input } from "@angular/core";

@Directive({
  // [] squre bracket are must, represents a property
  // can be used at any tag/component
  selector: "[appHighlight]",
  exportAs: "appHighlight" // for #myDir="appHighlight"
})
export class HighlightDirective implements OnInit, OnDestroy {
  @Input('appHighlight')
  color:string = "lightgreen";

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    console.log("Highlight directive created");
  }
  ngOnInit() {
    console.log("Host tag", this.hostElement.nativeElement.tagName);
    console.log("Highlight directive ngOnInit");
    if(!this.color){
      this.color="lightgreen";
    }
  }
  ngOnDestroy() {
    console.log("Highlight directive ngOnDestroy");
  }

  @HostListener('click')
  clicked(){
    console.log('click event');
  }
  @HostListener('mouseenter')
  mouseEnter(){
    this.renderer.setStyle(this.hostElement.nativeElement,'background',this.color);
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.renderer.removeStyle(this.hostElement.nativeElement,'background');
  }
}
