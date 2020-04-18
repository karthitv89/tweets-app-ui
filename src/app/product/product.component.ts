import { Component, OnInit } from '@angular/core';
import { Product} from '../product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    new Product('apple', 10, 't'),
    new Product('Orance', 3, 't'),
    new Product('Peach', 2, 't'),
    new Product('Car', 25000, 'my car')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
