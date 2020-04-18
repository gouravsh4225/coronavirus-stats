import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CoronaStatsService {
  private baseUrl = environment;

  constructor(private httpClient: HttpClient) {}

  getWorldDetails() {
    let requestUrl = this.baseUrl.WORLD_REQUEST_URL + "cases_by_country.php";
    return this.httpClient.get(requestUrl, {
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "0065b2f707mshe648da6df3a0a46p196d73jsnd82400dac5eb",
      },
    });
  }

  getWorldTotalStats() {
    let requestUrl = this.baseUrl.WORLD_REQUEST_URL + "worldstat.php";
    return this.httpClient.get(requestUrl, {
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "0065b2f707mshe648da6df3a0a46p196d73jsnd82400dac5eb",
      },
    });
  }

  getAllCountries() {
    return this.httpClient.get(this.baseUrl.ALL_COUNTRIES_LIST);
  }
}
