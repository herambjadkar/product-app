import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  today: Date = new Date();

  @Input("company") // alais name for property
  appCompany: string;

  constructor() {}
  ngOnInit() {}
  raise() {
    throw new Error('Crash');

  }
}
