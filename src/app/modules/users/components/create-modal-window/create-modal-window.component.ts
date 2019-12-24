import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { IUser } from '../../../shared/interfaces/IUser'

@Component({
  selector: 'app-create-modal-window',
  templateUrl: './create-modal-window.component.html',
  styleUrls: ['./create-modal-window.component.css']
})
export class CreateModalWindowComponent implements OnInit {

  @Input() user: IUser;
  @Output() public confirmCreate = new EventEmitter();
  @Output() public cancelCreate = new EventEmitter();
  public createUserForm: FormGroup;
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
    this.createUserForm = this.fb.group({
     name: [null],
     surname: [null],
     login:[null],
     password: [null]
    });
   }
  public cancelCreating(): void {
    this.cancelCreate.emit();
  }
  public confirmCreating(): void {
    this.user.name = this.nameControl.value;
    this.user.surname = this.surnameControl.value;
    this.user.login = this.loginControl.value;
    this.user.password = this.passwordControl.value;
    this.confirmCreate.emit(this.user);
  }




}
