import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users = USERS;

  constructor(private router: Router) { }

  public onSelect(name: string): void{
     this.router.navigate(['userInfo', name]);
  }
}
