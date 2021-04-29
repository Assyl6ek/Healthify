import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginModel = new User('', '', '', '', '', '')
  userRegisterModel = new User('', '', '', '', '', '')
  password2 = ''
  loginErrors: any = []
  registerErrors: any = []
  constructor(public userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }

  onLogin(): void {

    this.userService.login(this.userLoginModel).subscribe(
      res => {
        localStorage.setItem('token', res.name)
        this.userLoginModel.email = ''
        this.userLoginModel.password = ''
        this.router.navigate(['/main'])
      }
    )
  }
  onRegister(): void {
    let { email, name, surname, password } = this.userRegisterModel
    if(password !== this.password2){
      this.registerErrors.push('Пароли не совпадают')
      console.log(this.registerErrors)
      // this.userService.register(this.userRegisterModel)
    }
  }
}
