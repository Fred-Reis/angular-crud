import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = `${this.route.snapshot.paramMap.get("id")}`;
    this.productService.readById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Product Updated!");
      setTimeout(() => {
        this.router.navigate(["/products"]);
      }, 1000);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
