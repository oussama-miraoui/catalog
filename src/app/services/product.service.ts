import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<Product>

  constructor() { 
    this.products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
  }

  getProducts() : Observable<Array<Product>> {
    //if(Math.random() <0.5) return throwError(()=> new Error("Something went wrong!!!!!!!"))
    return of(this.products);
  }
  deleteProduct(id: number) : Observable<boolean> {
    this.products = this.products.filter(product => product.id != id)
    return of(true)
  }
}
