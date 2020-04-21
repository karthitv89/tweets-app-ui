import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TweetComponent } from './tweet/tweet.component';
import { ProductComponent } from './product/product.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http'

const routes = [
  {path:'product', component:ProductComponent},
  {path:'products/:productId', component:ProductDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'cart', component:CartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
   // TweetComponent,
    ProductComponent
    ,ProductAlertComponent, ProductDetailsComponent, HomeComponent, AboutComponent, ContactsComponent, CartComponent, TopBarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
