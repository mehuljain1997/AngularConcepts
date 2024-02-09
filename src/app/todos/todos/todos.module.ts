import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosDetailComponent } from '../todos-detail/todos-detail.component';


console.log('TodosModule calling')
@NgModule({
  declarations: [TodosDetailComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
