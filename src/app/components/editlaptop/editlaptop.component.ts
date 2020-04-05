import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-editlaptop', 
  templateUrl:'../createlaptops/createlaptops.component.html',
  styleUrls: ['./editlaptop.component.less'],
  providers: [UploadService, ProductService]
})
export class EditlaptopComponent implements OnInit {

	public title:string;
	public product:Product;
 	public status:string;
	public filesToUpload: Array<File>;
	public save_product:any;
	public url:string; 
	public productForm:String;

  constructor(
  	private _productService:ProductService,
    private _uploadService:UploadService,
    private _router: Router, //is a _router object of type Router
  	private _route: ActivatedRoute
  	) { 
  	this.title='Editar producto';
  	this.url=Global.url;
  }

  ngOnInit(){
  	this._route.params.subscribe(params=>{
  		let id = params.id;

  		this.getProduct(id);
  	});
  }
  getProduct(id){
    this._productService.getProduct(id).subscribe(
      response=>{
        this.product = response.product;       
        console.log('RESPUESTA ',response);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(projectForm: NgForm){
  	this._productService.updateProduct(this.product).subscribe(
      response=>{
      	if(response.product){
      		if(this.filesToUpload){//to upload the image when I have to upload
  				//UPLOAD THE IMAGE
	            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.product._id, [], this.filesToUpload,'image')

	              .then((result:any)=>{
	                this.save_product=result.product;
	                //console.log(result);
	                this.status='success';
	                
	              });
		    }else{
		      	this.save_product=response.product;
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
