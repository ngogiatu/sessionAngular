import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // muốn call api thì phải có đường dẫn api
  private apiGetAllProduct: string = 'http://localhost:8081/api/v1/product/get-all';

  // muốn gọi được đường dẫn trả về dữ liệu thì phải DI httpClient
  constructor(
    private http: HttpClient
  ) { }

  // Observable là 1 đối tượng stream of values khi mà nó phát ra dữ liệu thì
  // các hàm thực hiện đăng kí nó sẽ đc khởi chạy lại
  getAllProduct(): Observable<any[]>{
    return this.http.get<any[]>(this.apiGetAllProduct);
  }
}
