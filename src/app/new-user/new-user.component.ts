import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/models/user.model';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor(private userSvc: UserService, private router: Router) {}
  newUser: User;
  errorMsg = '';
  ngOnInit(): void {
    this.newUser = new User();
    // this.newUser.userId = 'Tony17';
    // this.newUser.firstName = 'Tony';
    // this.newUser.lastName = 'Jones';
    // this.newUser.emailAddress = 'tonyjones@gmail.com';
    // this.newUser.password = 'tonyjones12345';
  }

  CreateNewUser() {
    this.userSvc.CreateNewUser(this.newUser).subscribe(
      (returnedUser) => {
        console.log(returnedUser);
        this.router.navigate(['/login']);
        this.errorMsg = '';
      },
      (error) => {
        console.log(error);
        this.errorMsg = error.error.messsage;
      }
    );
  }
}
