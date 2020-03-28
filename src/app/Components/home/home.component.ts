import { Component, OnInit } from '@angular/core';
import {CoronaStatsService } from "../../Services/Corona-stats/corona-stats.service";
import {LoadingService} from "../../Services/loading-service/loading-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCountriesDetails:any = [];
  allWorldStatsCopy :any=[];
  allWorldStats :any=[];
  anyErrorOccured:boolean= true;
  constructor(private CoronaService:CoronaStatsService,private loadingScreenService:LoadingService) {
    this.loadingScreenService.setLoadingState(true);
  }

  ngOnInit() {
    this.loadingScreenService.setLoadingState(true);
    this.getWorlData();
    this.getTotalWorldStats();
  }

  /// for loading
  loadingState(loadingvalue) {
    this.loadingScreenService.setLoadingState(loadingvalue);
  }

  getTotalWorldStats() {
    this.CoronaService.getWorldTotalStats().subscribe((res:any)=>{
      this.loadingState(false);
      this.anyErrorOccured = false;
      this.allWorldStatsCopy.push(res);
      this.allWorldStats =res;
    },error=>{
      this.anyErrorOccured = false;
      console.log('error in total case ')
    })
  }

  getWorlData(){
    this.CoronaService.getWorldDetails().subscribe((res:any)=>{
      this.anyErrorOccured = false;
      this.loadingState(false);
      this.allCountriesDetails=res.countries_stat;
    },error=>{
      this.anyErrorOccured = false;
      console.log(error,'error')
    })
  }
}
