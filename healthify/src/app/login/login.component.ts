import { Component, OnInit } from '@angular/core';
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
  constructor(public userService: UserService) { }
  ngOnInit(): void {
  }
  onLogin(): void {
    let { email, password } = this.userLoginModel
    const user = {
      email,
      password
    }
    // this.userService.login(this.userLoginModel)
    console.log(user)
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
