import { Component, OnInit } from '@angular/core'; 
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { UploadphoneService } from '../../services/uploadphone.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createphones',
  templateUrl: './createphones.component.html',
  styleUrls: ['./createphones.component.less'],
  providers: [PhoneService, UploadphoneService]
})
export class CreatephonesComponent implements OnInit {
  public title:string;
  public phone:Phone;
  public status:string;
  public filesToUpload:Array<File>;
  public url:String;
  public save_phone;

  constructor(
  	private _phoneService: PhoneService,
    private _uploadService: UploadphoneService
  	) { 
  	this.title="Crear phone";
    this.phone=new Phone("Huawei","Huawei","Huawei","Huawei","Huawei","Huawei",2020,"");
    this.url=Global.url;
  }

  ngOnInit(){
  }
  //SAVE DATA BASIC
  onSubmit(form){    
    // console.log(this.phone);
    this._phoneService.savePhone(this.phone).subscribe(
      response => {  
        // console.log(response);
        if(response.phone){
          this.status="success";
          //SAVE FILE IMG 
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image-phone/'+response.phone._id, [], this.filesToUpload,'image')
                  .then((result:any)=>{
                    this.save_phone=result.phone;
                    //console.log(result);
                    this.status='success';
                    form.reset(); 
                  });
          }
          form.reset();
        }else{
          this.save_phone=response.phone;
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
 