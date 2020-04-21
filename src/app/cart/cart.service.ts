
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods" :"PUT,GET,POST,DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor( private httpClient : HttpClient) { 
    
  }
  

  addToCart(product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {

    return this.httpClient.get("localhost:8081/cart/productsInCart/1", httpOptions);

    //return this.items;
  }
}
