import { Component, Input, OnChanges, SimpleChanges, output } from '@angular/core'; // Добавили output
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [ProductItemComponent]
})
export class ProductListComponent implements OnChanges {
  @Input({ required: true }) products: Product[] = [];
  
  removeProductRequest = output<number>(); 

  filteredProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.filteredProducts = [...this.products];
    }
  }

  handleRemove(productId: number): void {
    this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
    
    this.removeProductRequest.emit(productId);
  }
}