import { Component, computed, input, InputSignal, output } from '@angular/core';
import { CartLineDto } from '../../models/cart-line.dto';
import { MoneyPipe } from '../../pipes/money-pipe';

@Component({
  imports: [MoneyPipe],
  selector: 'app-cart-content',
  styleUrl: './cart-content.scss',
  templateUrl: './cart-content.html',
})
export class CartContent {
  cartLines = input.required<CartLineDto[]>();
  minus = output<number>();
  plus = output<number>();
  remove = output<number>();

  total = computed<number>(() => {
    return this.cartLines()
      .map((cl) => cl.product.price * cl.quantity)
      .reduce((a, b) => a + b, 0);
  });
}
