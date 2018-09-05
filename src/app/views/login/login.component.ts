import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  // login form fields
  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    userPass: new FormControl('', [
      Validators.required
    ])
  });

  // getter for addPackageForm packageName
  get userName() {
    return this.loginForm.get('userName');
  }

  // getter for addPackageForm packagePrice
  get userPass() {
    return this.loginForm.get('userPass');
  }

  // login
  async loginUser() {
    const data = {
      username: this.userName.value,
      password: this.userPass.value
    }

    console.log(data);

    try {
      if (data.username !== '' && data.password !== '') {
        await this.userService.userLogin(data).subscribe(
          (res: any) => {
            console.log(res);
            this.loginForm.reset();
            localStorage.setItem('token', res.data.token);
            this.router.navigate(['users']);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        console.log('Some error occured...');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

}
