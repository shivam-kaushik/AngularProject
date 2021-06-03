import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { ContactUsComponent} from './contact-us/contact-us.component'
import { ProductsComponent} from './products/products.component'

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'contactus',
    component:ContactUsComponent
  },
  {
    path: 'products',
    component:ProductsComponent
  },
   {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
