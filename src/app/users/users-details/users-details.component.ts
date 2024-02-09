import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserData} from "../../interfaces/data_interface"

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  userDetail: UserData[]=[]

  constructor(private usersservice: UserService) { }

  ngOnInit(): void {
    this.usersservice.getUsers().subscribe((data:UserData[])=> {
      console.log('users data',data)
      this.userDetail = data
    },
    error => {
      console.log('error in users',error)
    })
  }

}
