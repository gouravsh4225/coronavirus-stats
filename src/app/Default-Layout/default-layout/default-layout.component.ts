import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  selectedTheme;
  constructor() { }

  ngOnInit() {
  }
    changeTheme(theme) {
    this.selectedTheme = theme !== 'light' ? theme : undefined;
  }

}
