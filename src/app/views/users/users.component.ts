import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<any> = [];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    // getting all the users from service
    this.userService.getUsers().subscribe(
      (res: any) => {
        const data: any[] = res.data;

        data.forEach((el) => {
          if (!el.admin) this.users.push(el);
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  login() {
    this.router.navigate(['login']);
  }

}
