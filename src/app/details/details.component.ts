import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public user: User;

  constructor(private activeRouter: ActivatedRoute, private router: Router, private httpService:UserService) { }

  public ngOnInit() {
    const id = this.activeRouter.snapshot.params._id;
    this.httpService.getUsersId(id).subscribe(data => {
    this.user = data[0];
    });
}

  public goBack():void {
    this.router.navigate(['']);
  }


}

