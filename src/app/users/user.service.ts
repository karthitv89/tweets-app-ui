import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http : HttpClient) {
        
    }

    loadUsers() {
        return this.http.get("https://reqres.in/api/users?page=2");
    }
}