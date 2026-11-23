import { Component } from '@angular/core';
import { ProductDto } from '../../models/product.dto';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-product-details',
  styleUrl: './product-details.scss',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  product: ProductDto;
  rating?: string;

  constructor() {
    this.product = {
      id: 1,
      name: 'Swing',
      description: 'It swings really well...',
      price: 999.99,
      imageUrl:
        'https://www.marbosport.fr/hpeciai/69de0963e06dc881758ef146b431761f/fre_pl_Pack-Espalier-Premium-et-Balancoire-Double-MO-016-MO-018-Marbo-Sport-29780_1.jpg',
    };
  }

  onClick(args: any) {
    console.log(args);

    alert(`Merci d'avoir évalué le produit à ${this.rating} étoiles`);
  }
}
