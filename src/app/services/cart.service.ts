import { computed, inject, Service, signal, WritableSignal } from '@angular/core';
import { CartLineDto } from '../models/cart-line.dto';
import { ProductService } from './product.service';

@Service()
export class CartService {
  private readonly _productService = inject(ProductService);

  cart: WritableSignal<CartLineDto[]> = signal<CartLineDto[]>([]);

  total = computed<number>(() => {
    return this.cart()
      .map((cl) => cl.product.price * cl.quantity)
      .reduce((a, b) => a + b, 0);
  });

  addToCart(productId: number) {
    this.cart.update((c) => {
      if (c.some((cl) => cl.product.id === productId)) {
        return c.map((cl) =>
          cl.product.id === productId
            ? { ...cl, quantity: cl.quantity + 1 }
            : { ...cl },
        );
      }
      let product = this._productService.findById(productId);

      if (!product) {
        return [...c];
      }

      return [
        ...c,
        {
          product,
          quantity: 1,
        },
      ];
    });
  }

  minusOne(productId: number) {
    this.cart.update((c) =>
      c
        .map((cl) =>
          cl.product.id === productId
            ? { ...cl, quantity: cl.quantity - 1 }
            : { ...cl },
        )
        .filter((cl) => cl.quantity > 0),
    );
  }

  plusOne(productId: number) {
    this.cart.update((c) =>
      c.map((cl) =>
        cl.product.id === productId
          ? { ...cl, quantity: cl.quantity + 1 }
          : { ...cl },
      ),
    );
  }

  removeFromCart(productId: number) {
    this.cart.update((c) => {
      return [...c.filter((p) => p.product.id !== productId)];
    });
  }
}
