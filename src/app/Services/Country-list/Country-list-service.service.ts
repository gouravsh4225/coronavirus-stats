import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountrylistService {
  private countryListSource = new BehaviorSubject<any>(null);
  countryList = this.countryListSource.asObservable();

  constructor() {}

  getCountryList(nextValue) {
    this.countryListSource.next(nextValue);
  }
}
