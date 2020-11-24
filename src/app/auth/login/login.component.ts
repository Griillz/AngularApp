import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userSvc: UserService,
    private authSvc: AuthGuardService
  ) {}
  userId: string = '';
  password: string = '';
  errorMsg: string = '';
  ngOnInit(): void {}

  Login() {
    this.userSvc.Login(this.userId, this.password).subscribe(
      (returnedToken) => {
        console.log(returnedToken);
        this.authSvc.SetUserLoggedIn(returnedToken);
        localStorage.setItem('Auth', JSON.stringify(returnedToken));
        localStorage.setItem('userId', this.userId);
        this.errorMsg = '';
      },
      (error) => {
        console.log(error);
        this.errorMsg = error.error.messsage;
      }
    );
  }
}
