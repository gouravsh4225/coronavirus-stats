import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CountrylistService } from "src/app/Services/Country-list/Country-list-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.scss"],
})
export class HeaderComponent implements OnInit {
  countryNameFlag: Object = {};
  constructor(private countryService: CountrylistService) {}

  @Output() changeThemeEventEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.countryService.selectedCountry.subscribe((res: Object) => {
      this.countryNameFlag = res;
      console.log("this.countryNameFlag--", this.countryNameFlag);
    });
  }
}
