import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  product: any[] = [];
  productDetail: any[] = [];

  check: boolean = false;

  titleButton: string = 'Detail';

  productIselected: any ;
  /**hàm thực hiện xem chí tiết các sp con của sản phảm
   *
   */
  detai(productID: any){
    this.product.forEach(p =>{
      if(p.id === productID){
        this.productIselected = p;
        this.productDetail = p.prodetailDTOS;
      }
    })
  }


  loadProducts(){
    this.productService.getAllProduct().subscribe({
      next: ((value: any[]) =>{
        this.product = value;
        console.log(value);
        // this.productDetail = this.product[0].prodetailDTOS;
        // console.log(this.productDetail);
      }
      )
    })

  }

  ngOnInit(): void {
    this.loadProducts();
  }
  constructor(
    private productService: ProductService
  ){}

  productDetailIsSelected: any = null;

  clickChange(idPd: number){
    alert('ID = ' + idPd);
    this.productDetail.forEach(pd => {
      if(pd.id === idPd){
        this.productDetailIsSelected = pd;
        console.log(this.productDetailIsSelected);
      }
    })
  }
}
