import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  safehtml:any;

  aboutLikes = 500;
  html=`<div><h1>Angular Router</h1></div>`
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safehtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

}
