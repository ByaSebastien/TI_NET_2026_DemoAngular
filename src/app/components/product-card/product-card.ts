import { Component, input, output } from '@angular/core';
import { ProductDto } from '../../models/product.dto';
import { MoneyPipe } from '../../pipes/money-pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [MoneyPipe, UpperCasePipe],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<ProductDto>();

  delete = output<number>();

  askDelete() {
    this.delete.emit(this.product().id)
  }
}
