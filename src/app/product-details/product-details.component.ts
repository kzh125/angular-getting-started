import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get("productId");
    this.product = products.find(product => {
      return product.id == Number(productIdFromRoute);
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert(product.name + " has been added to cart.");
  }

}
