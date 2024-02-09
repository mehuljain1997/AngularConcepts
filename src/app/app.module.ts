import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { TodosDetailsComponent } from './todos/todos-details/todos-details.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { LoginComponent } from './app/login/login.component';
import { MainComponent } from './app/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './app/parent/parent.component';
import { ChildComponent } from './app/child/child.component';
import { ChildSecondComponent } from './app/child-second/child-second.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosDetailsComponent,
    UsersDetailComponent,
    UsersDetailsComponent,
    LoginComponent,
    MainComponent,
    ParentComponent,
    ChildComponent,
    ChildSecondComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
