import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './interfaces/products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductAddComponent } from './component/product-add/product-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule,ProductDetailComponent,ProductAddComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedProduct!: Product;
  products : Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      description: 'Description 1',
      imgUrl: 'https://picsum.photos/id/30/302/220'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      description: 'Description 2',
      imgUrl: 'https://picsum.photos/id/31/302/220'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      description: 'Description 3',
      imgUrl: 'https://picsum.photos/id/32/302/220'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40,
      description: 'Description 4',
      imgUrl: 'https://picsum.photos/id/33/302/220'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 50,
      description: 'Description 5',
      imgUrl: 'https://picsum.photos/id/34/302/220'
    }
  ]

  Delete(id: number) {
    return this.products = this.products.filter(product => product.id !== id);
  }
  onHandelAdd(product:Product){
    this.products.push(product)
  }
  setProduct(product:Product) {
    this.selectedProduct = product
  }
}
