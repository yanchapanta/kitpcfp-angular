import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.less'],
  providers: [ProductService]
})
export class LaptopsComponent implements OnInit {
	public products:Product[];
	public url:string;

  constructor(
  	private _productService: ProductService
  	) { 
  	this.url = Global.url;
  }

  ngOnInit(){
  	this.getProjects();
  }
  getProjects(){
  	this._productService.getProducts().subscribe( 
  		response=>{
  			if(response.products){
  				this.products=response.products;
  			}
  			console.log(response);
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

}
