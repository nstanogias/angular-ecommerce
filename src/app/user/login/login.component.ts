import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public username: string = '';
  public password: string = '';
  public message: string = '';

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(
        (response) => {
          console.log('Successfully logged in');
          this.message = response.msg;
        },
        (err) => {
          console.error('Error logging in', err);
          this.message = err.error.msg;
        }
      );
  }
}
