import { Router } from "@angular/router";
import { Component } from "@angular/core";

import { ProductService } from "./../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage("Product created!");
      this.router.navigate(["/products"]);
    });
  }

  async cancel(): Promise<void> {
    await this.router.navigate(["/products"]);
  }
}
