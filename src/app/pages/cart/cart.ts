import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../../models/product.dto';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CartLineDto } from '../../models/cart-line.dto';
import { CartContent } from '../../components/cart-content/cart-content';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [MoneyPipe, CartContent],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  private readonly _productService = inject(ProductService);
  private readonly _cartService = inject(CartService);

  products: Signal<ProductDto[]> = this._productService.products;

  cart = this._cartService.cart;

  addToCart(id: number) {
    this._cartService.addToCart(id);
  }
}
