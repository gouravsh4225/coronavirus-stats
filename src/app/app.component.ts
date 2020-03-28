import { Component } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import {LoadingService} from "./Services/loading-service/loading-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,private loadingScreenService:LoadingService ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      this.loadingScreenService.setLoadingState(true)
    }
    if (event instanceof NavigationEnd) {
      this.loadingScreenService.setLoadingState(false)
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loadingScreenService.setLoadingState(false)

    }
    if (event instanceof NavigationError) {
      this.loadingScreenService.setLoadingState(false)
    }
  }
}
