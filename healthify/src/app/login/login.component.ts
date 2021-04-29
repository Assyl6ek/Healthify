import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user'
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userLoginModel = new User('', '', '', '', '', '', '')
  // userRegisterModel = new User('', '', '', '', '', '', '')
  public loginEmail = '';
  public loginPassword = '';
  logged = false;
  password2 = ''
  public name = '';
  public surname = '';
  public email = '';
  public password = '';
  user: User[] = [];

  loginErrors: any = []
  registerErrors: any = []
  constructor(public userService: UserService, private router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }



  clear() {
    this.loginEmail = '';
    this.loginPassword = '';
  }
  onAuth(): void {
    console.log(this.loginEmail)
    if (!this.loginPassword || !this.loginEmail) {
      alert('Please, fill all linws');
      this.clear();
    } else if (this.loginEmail && this.loginPassword) {
      this.userService.login(this.loginEmail, this.loginPassword).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', this.loginEmail);
        this.logged = true;
        this.clear();
        alert('You logged in successfully!');

      });
    } else {
      alert('Wrong login or password! Try again!');
    }
  }
  onRegister(): void {

      if (!this.email ||  !this.password  || !this.password2 || !this.name || !this.surname) {
        alert('Please, fill all lines!');
        this.clear(); // дописать
      } else if (this.password !== this.password2) {
        alert('Passwords do not match. Check it, please!');
      }
      this.userService.register(this.email, this.password, this.name, this.surname).subscribe(res => {
          this.user.push(res);


          this.clear(); // dasfadsffsadfsdf
          alert('You were successfully signed up. Now, please, log in');
        });
    }
}
