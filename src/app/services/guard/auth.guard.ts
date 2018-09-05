import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router'
import { UsersService } from '../users/users.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UsersService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const subject = new Subject<boolean>();

    if (localStorage.getItem('token')) {
      try {
        this.userService.verifyUser().subscribe(
          (res) => {
            console.log(res);
            subject.next(true);
            return;
          },
          (err) => {
            console.log(err);
            this.router.navigate(['login']);
            subject.next(false);
            return;
          }
        );
      }
      catch (err) {
        console.log(err);
        this.router.navigate(['login']);
        subject.next(false);
        return;
      }
    } else {
      this.router.navigate(['login']);
      subject.next(false);
      return;
    }
    return subject.asObservable().first();
  }

}
