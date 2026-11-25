import { Service, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../models/product.dto';

@Service()
export class ProductService {
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

  findById(productId: number) {
    return this.products().find((product) => product.id === productId);
  }

  delete(productId: number) {

    this.products.update(products => products.filter(p => p.id !== productId));
  }
}
