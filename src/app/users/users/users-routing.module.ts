import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { UsersDetailsComponent } from '../users-details/users-details.component';

const routes: Routes = [
  {path: '', redirectTo: "details"},
  {path: 'detail',component: UsersDetailComponent},
  {path: 'details',component: UsersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
