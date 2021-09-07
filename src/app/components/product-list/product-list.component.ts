import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  arrProduct: Product[] | undefined;
  constructor(private productsService:ProductsService) { }

  async ngOnInit(){
    try{
      this.arrProduct = await this.productsService.getAll();
    }catch(error){
      console.log(error)
    }
  }

}
