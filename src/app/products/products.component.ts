import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  
  products!: Array<Product>;
  errorMessage!: string
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.handleGetProducts();
  }
  
  handleGetProducts(){
    this.productService.getProducts().subscribe({
      next: data =>{
        this.products = data;
      },
      error: err =>{
        this.errorMessage = err;
      }
    })
  }

  handleDeleteProduct(product: Product) {

    let confirmDelete = confirm("Are u sure?");

    if(!confirmDelete) return
    this.productService.deleteProduct(product.id).subscribe({
      next: data => {
          //this.handleGetProducts();
          let index = this.products.indexOf(product);
          this.products.splice(index, 1);
      }
    })
  }
  
}
