import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  @Output() onAdd = new EventEmitter<Product>();
  addProduct(product: Product){
    this.onAdd.emit(product)
  }
}
