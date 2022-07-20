import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosDetailComponent } from '../todos-detail/todos-detail.component';
import { TodosDetailsComponent } from '../todos-details/todos-details.component';

const routes: Routes = [
    {path: '', redirectTo: "details"},
    {path: 'detail',component: TodosDetailComponent},
    {path: 'details',component: TodosDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
