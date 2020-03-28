import { Component, OnInit } from '@angular/core';
import {CoronaStatsService } from "../../Services/Corona-stats/corona-stats.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCountriesDetails:any = [];
  allWorldStats :any=[];
  constructor(private CoronaService:CoronaStatsService) { }

  ngOnInit() {
    this.getWorlData();
    this.getTotalWorldStats();
  }

  getTotalWorldStats() {
    this.CoronaService.getWorldTotalStats().subscribe((res:any)=>{
      this.allWorldStats = res;
        console.log(res,'res----Totals',this.allWorldStats)
    },error=>{
      console.log('error in total case ')
    })
  }

  getWorlData(){
    this.CoronaService.getWorldDetails().subscribe((res:any)=>{
      console.log(res,'res')
      this.allCountriesDetails = res.countries_stat;
    },error=>{
      console.log(error,'error')
    })
  }
}
