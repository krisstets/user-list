import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users : User[] = [];

  constructor(private router: Router, private httpService: UserService) { }

  ngOnInit() {
    return this.httpService.getUsers().subscribe(data=> this.users = data)
  }

  public onSelect(_id: string): void{
     this.router.navigate(['userInfo', _id]);
  }
}
