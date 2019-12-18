import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';

import { IUser } from '../../../shared/interfaces/IUser';

@Component({
  selector: 'app-edit-modal-window',
  templateUrl: './edit-modal-window.component.html',
  styleUrls: ['./edit-modal-window.component.css']
})
export class EditModalWindowComponent implements OnInit {

  @Input() user: IUser;
  @Output() public cancel = new EventEmitter();
  @Output() public save = new EventEmitter();
  public editUserForm: FormGroup;
  public nameControl = new FormControl('');
  public surnameControl = new FormControl('');
  public loginControl = new FormControl('');
  public passwordControl = new FormControl('');

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.nameControl.setValue(this.user.name);
    this.surnameControl.setValue(this.user.surname);
    this.loginControl.setValue(this.user.login);
    this.passwordControl.setValue(this.user.password)
  }



  ngOnInit() {
   this.editUserForm = this.fb.group({
    name: [null],
    surname: [null],
    login:[null],
    password: [null]
   });

  }

  public handleCancel(): void{
    this.cancel.emit();
   }

   public handleSave(): void{
    this.user.name = this.nameControl.value;
    this.user.surname = this.surnameControl.value;
    this.user.login = this.loginControl.value;
    this.user.password = this.passwordControl.value;
    this.save.emit(this.user);
   }

}
