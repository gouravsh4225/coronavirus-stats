import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from "../../Services/loading-service/loading-service.service";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  selectedTheme;
  loadingState:null;
  constructor(private loadinerScreen:LoadingService) {
  }

  ngOnInit() {
    this.loadinerScreen.loadingState.subscribe(data => {
      this.loadingState = data;
    })
  }
    changeTheme(theme) {
    this.selectedTheme = theme !== 'light' ? theme : undefined;
  }

}
