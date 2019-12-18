import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/interfaces/IUser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/userService/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public user: IUser;
  public isUserEditWindowVisible= false;
  public editingID: string;
  constructor(private activeRouter: ActivatedRoute, private router: Router, private userService: UserService) { }

  public ngOnInit() {
    const id = this.activeRouter.snapshot.params._id;
    this.userService.getUsersById(id).subscribe(data => {
    this.user = data[0];
    });
}

  public goBack():void {
    this.router.navigate(['']);
  }

  public onEdit(_id:string) {
    this.editingID = _id;
    this.isUserEditWindowVisible = true;
  }

  public handleCancel() :void {
    this.isUserEditWindowVisible= false;
  }

  public handleSave() :void {
    this.isUserEditWindowVisible= false;
    this.userService.editUser(this.editingID, this.user).subscribe(res => {console.log(res)})
  }

}

