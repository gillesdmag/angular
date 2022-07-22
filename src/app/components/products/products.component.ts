import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  products:any;
  product=new Product;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    console.log('list des produits');
    this.dataService.getData().subscribe(res=>{
      console.log(res);
      this.products=res;
    })
  }

  insertData(){
    console.log(this.product);
    this.dataService.insertData(this.product).subscribe(res=>{
      // console.log(res);
      this.getProductData();
    })
  }
}
