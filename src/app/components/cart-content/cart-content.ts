import { Component, input, InputSignal, output } from '@angular/core';
import { CartLineDto } from '../../models/cart-line.dto';

@Component({
  imports: [],
  selector: 'app-cart-content',
  styleUrl: './cart-content.scss',
  templateUrl: './cart-content.html',
})
export class CartContent {

  cartLines = input.required<CartLineDto[]>();
  minus = output<number>();
  plus = output<number>();
  remove = output<number>();
}
