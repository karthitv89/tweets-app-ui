import { Component, OnInit } from "@angular/core";
import { CartService } from './cart.service';
import { Product } from '../product';
import { FormBuilder} from '@angular/forms'

@Component({
    selector:'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']

})

export class CartComponent implements OnInit {
    items;
    checkoutForm;
    constructor(private cartService: CartService,
        private formBuilder : FormBuilder) {
            this.checkoutForm = formBuilder.group({
                name :'',
                address: ''
            });
    }
    ngOnInit(): void {
        this.items = this.cartService.getItems().subscribe((data : Product[]) => {
            this.items = data;
            console.log(data);
        });
        
    }

    onSubmit(customerData) {
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', customerData);
    }
} 