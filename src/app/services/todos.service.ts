import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { todosData } from "../interfaces/data_interface"

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<todosData[]>{
    console.log('getTodos calling')
    return this.http.get<todosData[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
