import { Router } from "@angular/router";
import { Component } from "@angular/core";

import { ProductService } from "./../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
  constructor(private ProductService: ProductService, private router: Router) {}

  createProduct(): void {
    this.ProductService.showMessage("Product created!");
  }

  async cancel(): Promise<void> {
    await this.router.navigate(["/products"]);
  }
}
