import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { CountrylistService } from "src/app/Services/Country-list/Country-list-service.service";

@Component({
  selector: "app-SearchFilter",
  templateUrl: "./SearchFilter.component.html",
  styleUrls: ["./SearchFilter.component.scss"],
})
export class SearchFilterComponent implements OnInit {
  searchCountryList: any = [];
  searchFilteredCountryList: any = [];
  selectedCountryname: string = "";
  showCountryList: boolean = false;

  constructor(private getCountryService: CountrylistService) {}

  ngOnInit() {
    this.getCountryService.countryList.subscribe((countrylist: any) => {
      if (countrylist) {
        countrylist.forEach((item) => {
          let { name, flag } = item;
          this.searchCountryList.push({ name, flag });
        });
        this.searchFilteredCountryList = [...this.searchCountryList];
      }
    });
  }

  onChangeSearchCountry(event) {
    if (event.target.value) {
      this.showCountryList = true;
      this.filterCountryList(event.target.value);
    } else if (event.target.value === "") {
      /// show all country List
      this.searchCountryList = this.searchFilteredCountryList;
    }
  }

  filterCountryList(filterValue) {
    this.searchCountryList = this.searchFilteredCountryList.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  selectFilterCountryName(country) {
    this.selectedCountryname = country.name;
    this.showCountryList = !this.showCountryList;
    this.getCountryService.selectCountryNext(country);
  }
}
