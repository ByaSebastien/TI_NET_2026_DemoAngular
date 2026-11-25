import { Component, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../../models/product.dto';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CartLineDto } from '../../models/cart-line.dto';
import { CartContent } from '../../components/cart-content/cart-content';

@Component({
  imports: [MoneyPipe, CartContent],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  products: WritableSignal<ProductDto[]> = signal([
    {
      id: 1,
      name: 'GTA VI',
      price: 71.99,
      description:
        'Grand Theft Auto VI (GTA VI) est le huitième opus principal de la série, la suite tant attendue après GTA V, sorti en 2013. Il est également le seizième jeu de la série globale, célébrant le crime pour lequel le jeu est nommé !',
      imageUrl:
        'https://gaming-cdn.com/images/products/15506/616x353/grand-theft-auto-vi-playstation-5-playstation-store-cover.jpg?v=1794933052',
    },
    {
      id: 2,
      name: 'Enshrouded',
      price: 35.79,
      description:
        "Vous vous réveillez en tant que dernier espoir d'un royaume déchu. Façonnez votre héros grâce à un arbre de compétences très complet : guerrier blindé, ranger redoutable, mage de combat dévastateur… ou combinez ces éléments pour créer un style de jeu qui vous est propre.",
      imageUrl:
        'https://gaming-cdn.com/images/products/14129/616x353/enshrouded-pc-steam-cover.jpg?v=1795089027',
    },
    {
      id: 3,
      name: 'The Legend of Zelda: Ocarina of Time',
      price: 54.29,
      description:
        "Découvrez une histoire intemporelle dans The Legend of Zelda: Ocarina of Time sur Nintendo Switch 2. Cette quête classique, repensée pour une nouvelle génération, présente des graphismes réimaginés, une bande-son réenregistrée ainsi qu'un gameplay modernisé.",
      imageUrl:
        'https://gaming-cdn.com/images/products/22210/616x353/the-legend-of-zelda-ocarina-of-time-switch-2-nintendo-eshop-cover.jpg?v=1790857913',
    },
  ]);

  cart: WritableSignal<CartLineDto[]> = signal<CartLineDto[]>([]);

  addToCart(productId: number) {
    this.cart.update((c) => {
      if (c.some((cl) => cl.product.id === productId)) {
        return c.map((cl) =>
          cl.product.id === productId
            ? { ...cl, quantity: cl.quantity + 1 }
            : { ...cl },
        );
      }
      let product = this.products().find((p) => p.id === productId)!;
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
      c.map((cl) =>
          cl.product.id === productId
            ? { ...cl, quantity: cl.quantity - 1 }
            : { ...cl },
        )
        .filter((cl) => cl.quantity > 0),
    );
  }

  plusOne(productId: number) {
    this.cart.update((c) =>
      c.map(cl => cl.product.id === productId ? { ...cl, quantity: cl.quantity + 1 } : {...cl})
    );
  }

  removeFromCart(productId: number) {
    this.cart.update((c) => {
      return [...c.filter((p) => p.product.id !== productId)];
    });
  }
}
