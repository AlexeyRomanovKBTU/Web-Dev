import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true,
  imports: [CommonModule, DecimalPipe]
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  activeShareId: number | null = null;
  currentImageIndex = 0;

  nextImage(event: Event): void {
    event.stopPropagation();
    const totalImages = this.product().images.length;
    this.currentImageIndex = (this.currentImageIndex + 1) % totalImages;
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    const totalImages = this.product().images.length;
    this.currentImageIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
  }

  setIndex(index: number): void {
    this.currentImageIndex = index;
  }

  likeProduct(): void {
    this.product().likes++;
  }

  onDeleteClick(): void {
    const confirmed = confirm(`Вы уверены, что хотите удалить "${this.product().name}"?`);
    if (confirmed) {
      this.remove.emit(this.product().id);
    }
  }

  toggleShare() {
    this.activeShareId = this.activeShareId === this.product().id ? null : this.product().id;
  }

  safeEncode(value: string): string {
    return encodeURIComponent(value);
  }
}