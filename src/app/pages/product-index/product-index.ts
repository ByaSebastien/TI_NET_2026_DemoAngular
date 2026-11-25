import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../../models/product.dto';
import { GsapEntrance } from '../../directives/gsap-entrance';
import { ProductCard } from '../../components/product-card/product-card';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [
    GsapEntrance,
    ProductCard,
    ConfirmDialog,
  ],
  selector: 'app-product-index',
  styleUrl: './product-index.scss',
  templateUrl: './product-index.html',
})
export class ProductIndex {

  private readonly _productService = inject(ProductService);

  products: Signal<ProductDto[]> = this._productService.products;

  selectedProduct: WritableSignal<ProductDto | undefined> = signal(undefined);

  handleWantToDelete(productId: number) {
    let product = this.products().find((product) => product.id === productId);
    this.selectedProduct.set(product);
  }

  handleConfirm() {
    this._productService.delete(this.selectedProduct()!.id);
    this.selectedProduct.set(undefined);
  }

  handleCancel() {
    this.selectedProduct.set(undefined);
  }
}
