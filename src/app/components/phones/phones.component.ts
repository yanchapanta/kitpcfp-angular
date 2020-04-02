import { Component, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.less'],
  providers: [PhoneService]
})
export class PhonesComponent implements OnInit {
	public phones:Phone[];
	public url:string;

  constructor(
  	private _phoneService: PhoneService
  	) { 
  	this.url = Global.url;
  }

  ngOnInit(){
  	this.getPhones();
  }
  getPhones(){
  	this._phoneService.getPhones().subscribe( 
  		response=>{
  			if(response.phones){
  				this.phones=response.phones;
  			}
  			console.log(response);
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

}
