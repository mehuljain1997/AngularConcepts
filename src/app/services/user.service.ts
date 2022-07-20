import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {UserData} from "../interfaces/data_interface"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserData[]>{
    return this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/users')

  }
}
