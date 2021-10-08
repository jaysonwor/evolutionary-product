import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  showNavbar: boolean = true;

  constructor() { }

  getNavbarState(){
    return this.showNavbar;
  }

  setNavbarState(state) {
    this.showNavbar = state;
  }
  
}
