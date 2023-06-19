import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {}

  get headerData(): any {
    return this.headerService.headerData;
  }

  // onInit() {}
}
