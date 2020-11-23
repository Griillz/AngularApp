import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { ApiToken } from '../models/token.model'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
@Output() UserStateChanged = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = localStorage.getItem('Auth');
    if(authToken!==null){
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  SetUserLoggedIn(tokenAuth:ApiToken){
    localStorage.setItem('Auth',JSON.stringify(tokenAuth));
    this.UserStateChanged.emit(true);
  }

  Logout(){
    localStorage.removeItem('Auth');
    this.UserStateChanged.emit(false);
  }
}
