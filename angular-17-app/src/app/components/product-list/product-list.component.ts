import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  isLoading:boolean = false;
  constructor(private productservice: ProductsService){}
  
  ngOnInit(){
    this.isLoading = true;
    // setTimeout(() => {
    //   this.productservice.fetchProducts().subscribe((response: any)=>{
    //     this.products = response;
    //     this.isLoading = false;
    //   })
    // }, 3000);

    this.productservice.fetchProducts().subscribe((response: any)=>{
        this.products = response;
        this.isLoading = false;
    })
  }
}
