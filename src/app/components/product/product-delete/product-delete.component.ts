import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Product } from "../product.model";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent {
  product: Product = {
    name: "",
    price: null,
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = `${this.route.snapshot.paramMap.get("id")}`;
    this.productService
      .readById(productId)
      .subscribe((product) => (this.product = product));
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage("Product deleted!");
      setTimeout(() => {
        this.router.navigate(["/products"]);
      }, 1000);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
