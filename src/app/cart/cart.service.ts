
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { Product } from '../product';

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
  items : Product[];
  constructor( private httpClient : HttpClient) { 
    
  }
  configUrl = 'assets/productData.json';

  
  getConfig() {
    return this.httpClient.get<Product[]>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  makeIntentionalError() {
    return this.httpClient.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
  
  addToCart(product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {

    return this.httpClient.get("assets/productData.json", httpOptions);

    //return this.items;
  }
}
