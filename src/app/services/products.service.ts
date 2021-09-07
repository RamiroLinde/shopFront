import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string;
  constructor(private httpClient:HttpClient) {
    this.url="http://localhost:3000/api/public_products";
   }

  getAll(): Promise<Product[]>{
    return this.httpClient.get<Product []>(this.url).toPromise();
  }
}
