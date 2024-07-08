import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../entity/client';

@Component({
  selector: 'app-hello-angular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello-angular.component.html',
  styleUrl: './hello-angular.component.scss'
})
export class HelloAngularComponent implements OnInit{
  // khai bao biến các kiểu dữ liệu cơ bản của typesc (boolean, number, mảng[], chuỗi string, Array{})
abc : string = "tu dep trai";
xyz : string = 'phu dtrai ma thua toi';
bcd : string = `${this.abc} ${this.xyz}`;

// cách khai báo biến
// cú pháp khai báo biến: (tenbien: kieudulieu = gán dữ liệu)

n1 : number = 0;
n2 : number = 0;

// hàm (cú pháp tạo hạm: tenham(tham số chuyền vào): kiểu hàm trả về ví dụ: void string...  )

app (a : number , b : number) : number {
  alert(a + b);
  return a + b;
}

// class --> ten class
// cú pháp tạo class ng generate class tên class
client : Client = {
  ten: 'Ngô Tự',
  tuoi: 20,
  diaChi: 'Ninh Binh'
}
client1 : Client = {
  ten: 'Trong phú',
  tuoi: 20,
  diaChi: 'Ninh Binh'
}
client2 : Client = {
  ten: 'Anh Tuấn',
  tuoi: 20,
  diaChi: 'Ninh Binh'
}

mang1: Client[] = [];
constructor(){

}
  ngOnInit(): void {
   this.mang1.push(this.client);
   this.mang1.push(this.client1);
   this.mang1.push(this.client2);
  }
}
