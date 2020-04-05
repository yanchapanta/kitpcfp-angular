import { Component, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm  } from '@angular/forms';
 
@Component({
  selector: 'app-editphone',
  templateUrl:'../createphones/createphones.component.html',
  styleUrls: ['./editphone.component.less'],
  providers: [UploadService, PhoneService]
})
export class EditphoneComponent implements OnInit {
	
	public title:string;
	public phone:Phone;
 	public status:string;
	public filesToUpload: Array<File>;
	public save_phone:any;
	public url:string; 
	public phoneForm:String;

  constructor(
  	private _phoneService:PhoneService,
    private _uploadService:UploadService,
    private _router: Router, //is a _router object of type Router
  	private _route: ActivatedRoute
  	) { 
  	this.title='Editar phoneo';
  	this.url=Global.url;
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

  onSubmit(phoneForm: NgForm){
  	this._phoneService.updatePhone(this.phone).subscribe(
      response=>{
      	if(response.phone){
      		if(this.filesToUpload){//to upload the image when I have to upload it
  				//UPLOAD THE IMAGE
	            this._uploadService.makeFileRequest(Global.url+'upload-image-phone/'+response.phone._id, [], this.filesToUpload,'image')

	              .then((result:any)=>{
	                this.save_phone=result.phone;
	                //console.log(result);
	                this.status='success'; 
	                
	              });
		    }else{
		      	this.save_phone=response.phone;
		        //console.log(result);
		        this.status='success';
		    }         
        }else{
          this.status='failed';
        }        
      },
      error=>{
        console.log(<any>error);
      }
    );

  }//filling method
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
}
