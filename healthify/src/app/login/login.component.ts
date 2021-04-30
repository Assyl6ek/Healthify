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


  constructor(public userService: UserService, private router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  onAuth(): void {
    console.log(this.loginEmail)
    if (!this.loginPassword || !this.loginEmail) {
      alert('Please, fill all lines');
      this.loginEmail = '';
      this.loginPassword = '';
    } else if (this.loginEmail && this.loginPassword) {
      this.userService.login(this.loginEmail, this.loginPassword).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', this.loginEmail);
        this.logged = true;
        // this.loginEmail = '';
        // this.loginPassword = '';
        // this.router.navigate(['main/'])
        // alert('You logged in successfully!');
        this.userService.isAdmin(this.loginEmail).subscribe(res => {
          console.log(res)
          alert('You logged in successfully!');
          if(res == true){
            this.router.navigate(['admin/'])
          }
          else{
            this.router.navigate(['main/'])
          }
          this.loginEmail = '';
          this.loginPassword = '';
        });
      });
    } else {
      alert('Wrong login or password! Try again!');
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }


  onRegister(): void {

      if (!this.email ||  !this.password  || !this.password2 || !this.name || !this.surname) {
        alert('Please, fill all lines!');
        this.email = '';
        this.password = '';
        this.name = '';
        this.surname = '';
        this.password2 = '';
      } else if (this.password !== this.password2) {
        alert('Passwords do not match. Check it, please!');
      }
      this.userService.register(this.email, this.password, this.name, this.surname).subscribe(res => {
          this.user.push(res);
        this.email = '';
        this.password = '';
        this.name = '';
        this.surname = '';
        this.password2 = '';
          alert('You were successfully signed up. Now, please, log in');
        });
    }
}
