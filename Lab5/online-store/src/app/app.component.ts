import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { PRODUCTS, CATEGORIES } from './data/store.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ProductListComponent]
})
export class App {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;
  selectedCategory: Category | null = null;

  get currentProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory!.id);
  }

  handleDelete(id: number): void {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}