import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public users = USERS;
  public user: User;


  constructor(private activeRouter: ActivatedRoute, private router: Router) { }

  public ngOnInit():void {
    console.log(this.activeRouter);
    const name = this.activeRouter.snapshot.params.name;
    this.user = this.users.filter(user => user.name === name)[0];
  }

  public goBack():void {
    this.router.navigate(['']);
  }
}

