import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { MainComponent } from './app/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'main',component: MainComponent},
  {path: "home", component: HomeComponent},
  {path: "todos", loadChildren: ()=> import('./todos/todos/todos.module').then(m=> m.TodosModule)},
  {path: "users",loadChildren: ()=> import('./users/users/users.module').then(m=> m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
