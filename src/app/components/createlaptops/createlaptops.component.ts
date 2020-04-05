import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createlaptops',
  templateUrl: './createlaptops.component.html',
  styleUrls: ['./createlaptops.component.less'],
  providers: [ProductService, UploadService]
})
export class CreatelaptopsComponent implements OnInit {
  public title:string;
  public product:Product;
  public status:string;
  public filesToUpload:Array<File>;
  public url:String;
  public save_product;

  constructor(
  	private _productService: ProductService,
    private _uploadService: UploadService
  	) { 
  	this.title="Crear laptop";
    this.product=new Product("Toshiba","Toshiba","Toshiba","Toshiba","Toshiba","Toshiba",2020,"");
    this.url=Global.url;
  }

  ngOnInit(){
  }
  //SAVE DATA BASIC
  onSubmit(form){    
    // console.log(this.product);
    this._productService.saveProduct(this.product).subscribe(
      response => {  
        // console.log(response);
        if(response.product){
          this.status="success";
          //SAVE FILE IMG 
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image-phone/'+response.product._id, [], this.filesToUpload,'image')
                  .then((result:any)=>{
                    this.save_product=result.product;
                    //console.log(result);
                    this.status='success';
                    form.reset(); 
                  });
          }
          form.reset();
        }else{
          this.save_product=response.product;
          this.status = "failed";
          form.reset();
        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput:any){
    // console.log(fileInput);//fileInput catch the wind
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
  

}
