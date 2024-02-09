import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {
  todosData=[]

  constructor(private todosservice: TodosService) { }

  ngOnInit(): void {
      this.todosservice.getTodos().subscribe((data:any)=> {
        console.log('todos data',data)
        this.todosData=data
      },
      error=> {
        console.log('error in todos',error)
      })
  }

}
