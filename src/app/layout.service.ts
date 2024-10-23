import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private menuBarVisible = new BehaviorSubject<boolean>(true);
  private navbarVisible = new BehaviorSubject<boolean>(true);

  menuBarVisible$ = this.menuBarVisible.asObservable();
  navbarVisible$ = this.navbarVisible.asObservable();

  setMenuBarVisibility(visible: boolean) {
    this.menuBarVisible.next(visible);
  }

  setNavbarVisibility(visible: boolean) {
    this.navbarVisible.next(visible);
  }
}
