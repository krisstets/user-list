import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/userService/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  public loginUserForm: FormGroup;


  constructor(private router: Router,  private authService: UserService, private fb: FormBuilder,) { }

  public ngOnInit(): void {
     this.loginUserForm = this.fb.group({
      login: [''],
      password: ['']
    });
    console.log(this.loginUserForm);
  }


  public submit(): void {
      this.authService.login(this.loginUserForm.value).subscribe(response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['users']);
      });
  }
}
