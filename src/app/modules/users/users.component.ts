import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../shared/interfaces/IUser';
import { UserService } from '../shared/services/userService/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  public users : IUser[] = [];
  public isDeleteWindowVisible = false;
  public deletingID: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=> this.users = data)
  }

  public onSelect(_id: string): void{
     this.router.navigate(['userInfo', _id]);
  }

  public onDelete($event, _id: string): void{

    this.deletingID = _id
    this.isDeleteWindowVisible = true;
    $event.stopPropagation();

  }

  public cancelDeleting(): void {
    this.isDeleteWindowVisible = false;
  }

  public confirmDeleting(): void {
    this.isDeleteWindowVisible = false;
    this.userService.getUsers().subscribe(data=> this.users = data);
    this.userService.deleteUserByID(this.deletingID).subscribe(res => {console.log(res)})
  }
}
