import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //two way-data-binding
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('onSubmit calling',this.loginForm.value)
    this.router.navigate(['main'])
    
  }

}
