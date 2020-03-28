import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingStateSource = new BehaviorSubject<any>(true);
  loadingState = this.loadingStateSource.asObservable();

  constructor() { }

  setLoadingState(nextValue){
    this.loadingStateSource.next(nextValue);
  }
}
