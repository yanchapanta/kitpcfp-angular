import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Product } from '../models/product';
import { Global } from './global';

@Injectable()
export class ProductService{
	public url:string;

	constructor(
		private _http: HttpClient
		){
		this.url=Global.url;
	}

	testService(){
		return 'Probando servicio de angular';
	}
	saveProduct(product:Product):Observable<any>{
		let params=JSON.stringify(product);//To make the object a string
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url+'save-product', params, {headers: headers});
	}
	getProducts():Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'products', {headers: headers});
	}
	getProduct(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'product/'+id, {headers: headers});
	}
	deleteProduct(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'product/'+id,{headers:headers});
	}
	//we pass the entire project project, as parameter
	updateProduct(product):Observable<any>{
		let params=JSON.stringify(product);
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'product/'+product._id,params,{headers:headers});
	}
   
}   