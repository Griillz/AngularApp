import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authGuardSvc:AuthGuardService) { }
  loggedIn: boolean=false;
  ngOnInit(): void {
    this.authGuardSvc.UserStateChanged.subscribe((userState)=>{
      this.loggedIn = userState;
    })
  }

  Logout() {
    this.authGuardSvc.Logout();
    this.router.navigate(['/home']);
  }

}
