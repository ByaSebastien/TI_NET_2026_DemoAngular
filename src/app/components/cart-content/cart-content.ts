import { Component, computed, inject, input, InputSignal, output, Signal } from '@angular/core';
import { CartLineDto } from '../../models/cart-line.dto';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [MoneyPipe],
  selector: 'app-cart-content',
  styleUrl: './cart-content.scss',
  templateUrl: './cart-content.html',
})
export class CartContent {

  private readonly _cartService = inject(CartService);

  cartLines: Signal<CartLineDto[]> = this._cartService.cart;

  total = this._cartService.total;

  minusOne(productId: number) {
    this._cartService.minusOne(productId);
  }

  plusOne(productId: number) {
    this._cartService.plusOne(productId);
  }

  remove(productId: number) {
    this._cartService.removeFromCart(productId);
  }
}
