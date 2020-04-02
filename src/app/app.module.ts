import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';//ajax product.service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//chui data product.service
import { Routing, AppRoutingProviders }  from './app.routing';
import { MessageService } from './services/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { CreatelaptopsComponent } from './components/createlaptops/createlaptops.component';
import { CreatephonesComponent } from './components/createphones/createphones.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './components/error/error.component';
import { VideoComponent } from './components/video/video.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { PhonesComponent } from './components/phones/phones.component';
import { EditlaptopComponent } from './components/editlaptop/editlaptop.component';
import { DetailphoneComponent } from './components/detailphone/detailphone.component';
import { EditphoneComponent } from './components/editphone/editphone.component';

// import * as swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

@NgModule({ 
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CreateComponent,
    CreatelaptopsComponent,
    CreatephonesComponent,
    DetailComponent,
    ProductsComponent,
    ErrorComponent,
    VideoComponent,
    LaptopsComponent,
    PhonesComponent,
    EditlaptopComponent,
    DetailphoneComponent,
    EditphoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  AppRoutingProviders,
  MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
