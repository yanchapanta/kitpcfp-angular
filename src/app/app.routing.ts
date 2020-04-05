import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { CreatelaptopsComponent } from './components/createlaptops/createlaptops.component';
import { CreatephonesComponent } from './components/createphones/createphones.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './components/error/error.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { PhonesComponent } from './components/phones/phones.component';
import { EditlaptopComponent } from './components/editlaptop/editlaptop.component';
import { DetailphoneComponent } from './components/detailphone/detailphone.component'; 
import { EditphoneComponent } from './components/editphone/editphone.component';
//Define footes
const AppRoutes: Routes=[
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'productos', component: ProductsComponent},
	{path: 'productos/laptos', component: LaptopsComponent},
	{path: 'productos/phones', component: PhonesComponent},
	{path: 'producto/:id', component: DetailComponent},
	{path: 'phone/:id', component: DetailphoneComponent},
	{path: 'crear', component: CreateComponent},
	{path: 'crear/laptop', component: CreatelaptopsComponent},
	{path: 'crear/phone', component: CreatephonesComponent},
	{path: 'editar-producto/:id', component: EditlaptopComponent},
	{path: 'editar-phone/:id', component: EditphoneComponent},
	{path: 'contacto', component: ContactComponent},
	{path: '**', component: ErrorComponent}, 
];

//export router settings
export const AppRoutingProviders: any[]=[];
//Load configuration into the angular footer
export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);



