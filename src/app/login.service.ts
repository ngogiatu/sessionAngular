import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] =
  [
    new User('Ngotu123', '123456'),
    new User('tungph44845', '123456')
  ];

  // hàm sử dụng để lấy danh sách user
  getAllUser(): User[]{
    return this.users;
  }

  // cú pháp forech trong hàm angular
  // tên mảng. forEach(item =>
  // logic của vòng lắp đối tượng
  //)

  // hảm sử dụng để login vào hệ thống
  loginService(user: User): string{
    debugger
    let check = false;
    this.users.forEach(u => {
      if(user.username === u.username && user.password === u.password){
        check = true;
      }
    }
    )
    if(check){
      return 'Đăng nhập thành công';
    }

    return 'Đăng nhập thất bại';
  }



  constructor() { }
}
