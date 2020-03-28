import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOptions = [
    {iconName:'home',displayName:'Home',redirectUrl:'/'},
    {iconName:'person',displayName:'About',redirectUrl:'about'},
    {iconName:'account_box',displayName:'Contact',redirectUrl:'contact'},
  ]
  constructor(private router: Router) { }
  @Output() changeThemeEventEmitter = new EventEmitter<string>();
  ngOnInit() {
  }

  navigateToMenu(menuOption) {
        this.router.navigate([menuOption.redirectUrl])
  }

  changeThemeToggle(themeName) {
    this.changeThemeEventEmitter.emit(themeName)
  }
}
