import { Component, OnInit } from "@angular/core";
import { CoronaStatsService } from "../../Services/Corona-stats/corona-stats.service";
import { LoadingService } from "../../Services/loading-service/loading-service.service";
import { error } from "util";
import { CountrylistService } from "src/app/Services/Country-list/Country-list-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  allCountriesDetails: any = [];
  allWorldStatsCopy: any = [];
  allWorldStats: any = [];
  allWorldList: any = [];
  anyErrorOccured: boolean = true;
  constructor(
    private CoronaService: CoronaStatsService,
    private loadingScreenService: LoadingService,
    private countryListService: CountrylistService
  ) {
    this.loadingScreenService.setLoadingState(true);
  }

  ngOnInit() {
    this.loadingScreenService.setLoadingState(true);
    this.getWorlData();
    this.getTotalWorldStats();
    this.getAllCountreisList();
  }

  /// for loading
  loadingState(loadingvalue) {
    this.loadingScreenService.setLoadingState(loadingvalue);
  }

  getTotalWorldStats() {
    this.CoronaService.getWorldTotalStats().subscribe(
      (res: any) => {
        this.loadingState(false);
        this.anyErrorOccured = false;
        this.allWorldStatsCopy.push(res);
        // this.allWorldStats = res;
        let { total_cases, new_cases, total_deaths, total_recovered } = res;
        for (const worldStat in {
          total_cases,
          new_cases,
          total_deaths,
          total_recovered,
        }) {
          let newObject = {
            name: "",
            counts: 0,
          };
          if (worldStat === "total_cases") {
            newObject.name = "Cases";
            newObject.counts = total_cases;
          } else if (worldStat === "new_cases") {
            newObject.name = "New Cases";
            newObject.counts = new_cases;
          } else if (worldStat === "total_deaths") {
            newObject.name = "Deaths";
            newObject.counts = total_deaths;
          } else if (worldStat === "total_recovered") {
            newObject.name = "Recovered";
            newObject.counts = total_recovered;
          }
          this.allWorldStats.push(newObject);
          console.log(worldStat, "worldStat", res[worldStat], "res[worldStat]");
        }
        console.log("allWorldStats", this.allWorldStats);
      },
      (error) => {
        this.anyErrorOccured = false;
        console.log("error in total case ");
      }
    );
  }

  getWorlData() {
    this.CoronaService.getWorldDetails().subscribe(
      (res: any) => {
        this.anyErrorOccured = false;
        this.loadingState(false);
        this.allCountriesDetails = res.countries_stat;
      },
      (error) => {
        this.anyErrorOccured = false;
        console.log(error, "error");
      }
    );
  }

  getAllCountreisList() {
    this.CoronaService.getAllCountries().subscribe(
      (res: any) => {
        this.allWorldList = res;
        this.countryListService.getCountryList(res);
      },
      (error) => {
        console.log("error");
      }
    );
  }
}
