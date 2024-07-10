import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component implements OnInit, OnDestroy{

  // vòng đời component

  /* component khởi chạy theo thứ tự
  *  Khởi tạo tất cả các biến toàn cục từ trên xuống dưới
  *
  * -> constructor (DT) depan
  * -> ngOnInit: khởi chạy sau khi component hoàn thiện việc khởi tạo
  * -> khi thực hiện hủy 1 component thực hiện nhảy vào ngonDestroy
  * */
  ngOnInit(): void {
    //this.deQuyChuyenMau();
    this.productName = "hihi"
  }
  productName : string = 'Ngo Gia Tu';
  constructor(){
    this.productName = "Ngô Gia Tự Đẹp Trai"
  }
  ngOnDestroy(): void {

  }




  productPrice: number = 1000;
  productImg : string = "https://smilemedia.vn/wp-content/uploads/2022/08/chup-anh-san-pham-tai-HCM.jpg";

  a: string = 'red';
  b: string = 'blue';
  c: string = '';

  // chuyển đổi sang màu xanh
  changeColerBlue(): void{
    this.c = this.b;
  }
  // chuyển sang màu đỏ
  changeColerRed(): void{
    this.c = this.a;
  }

  i = 0;
  deQuyChuyenMau(): void{
    // nếu i = 0 thì chuyển sang xanh
    if(this.i === 0){
      this.c = this.b;
      this.i++;
    }
    // nếu i = 1 thì chuyển sang đỏ
    else{
      this.c = this.a;
      this.i = 0;
    }
    setTimeout(() => this.deQuyChuyenMau(), 500);
  }
}
