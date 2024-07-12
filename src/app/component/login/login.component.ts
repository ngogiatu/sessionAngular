import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { User } from '../../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  typePassword: string = "password";
  hehe() {
    this. typePassword = this.typePassword === 'password' ? 'text' : 'password';
  }

  users: any;

  constructor(
    private loginService: LoginService){
      this.loadUserToTable();
    }

  username: User[] = [];

  userLogin : User = {
    username: '',
    password: ''
  }
  login(){
    debugger
    alert(this.loginService.loginService(this.userLogin))
    ;
  }

  loadUserToTable(){
    this.users = this.loginService.getAllUser();
    console.log(this.loginService.getAllUser());
  }
}
