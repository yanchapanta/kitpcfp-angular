import { Component, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-detailphone',
  templateUrl: './detailphone.component.html',
  styleUrls: ['./detailphone.component.less'],
  providers:[PhoneService]
})
export class DetailphoneComponent implements OnInit {
  public url:string;
  public phone: Phone;
  public confirm: boolean;

  constructor(
  	private _phoneService: PhoneService,
  	private _router: Router,
  	private _route: ActivatedRoute
  	) { 
  	this.url = Global.url;
    this.confirm= false;
  }

  ngOnInit(){
  	this._route.params.subscribe(params=>{
  		let id = params.id;

	  	this.getPhone(id);
	});
  }

  getPhone(id){
    this._phoneService.getPhone(id).subscribe(
      response=>{
        this.phone = response.phone;       
        console.log('RESPUESTA ',response);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  setConfirm(confirm){
    this.confirm=confirm;
  }
  deletePhone(id){
    this._phoneService.deletePhone(id).subscribe(
      response=>{
        if(response.phone){
          this._router.navigate(['/productos/phones']);
        }        
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
