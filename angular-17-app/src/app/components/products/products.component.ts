import { Component } from '@angular/core';
import * as data from './products.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, 
    NgxPaginationModule, 
    SearchPipe, 
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = (data as any).default;

  searchText: string = '';

  p: any = 1; // p: any; --- p is current page.

  trimDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
    }
    return description;
  }


  public sortProductsDesc(): void {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price);
  }

  public sortProductsAsc() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price);
  }

}
