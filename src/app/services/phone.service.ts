import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Phone } from '../models/phone';
import { Global } from './global';

@Injectable()
export class PhoneService{
	public url:string;

	constructor(
		private _http: HttpClient
		){
		this.url=Global.url;
	}

	testService(){
		return 'Probando servicio de angular';
	}
	savePhone(phone:Phone):Observable<any>{
		let params=JSON.stringify(phone);//To make the object a string
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url+'save-phone', params, {headers: headers});
	}
	getPhones():Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'phones', {headers: headers});
	}
	getPhone(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'phone/'+id, {headers: headers});
	}
	deletePhone(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'phone/'+id,{headers:headers});
	}
	//we pass the entire project project, as parameter
	updatePhone(phone):Observable<any>{
		let params=JSON.stringify(phone);
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'phone/'+phone._id,params,{headers:headers});
	}
   
}   