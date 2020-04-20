import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountrylistService {
  private countryListSource = new BehaviorSubject<any>(null);
  countryList = this.countryListSource.asObservable();
  /// for Country Selected
  private selectedCountrySource = new BehaviorSubject<any>({
    name: "World",
    flag: "../../../assets/Image/globeIcon.jpg",
  });
  selectedCountry = this.selectedCountrySource.asObservable();

  constructor() {}

  getCountryList(nextValue) {
    this.countryListSource.next(nextValue);
  }

  selectCountryNext(nextCountry) {
    this.selectedCountrySource.next(nextCountry);
  }
}
