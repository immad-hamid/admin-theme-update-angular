import { Injectable } from '@angular/core';
import { RestApiService } from '../http.service';

@Injectable()
export class UsersService {

  constructor(private http: RestApiService) { }

  verifyUser() {
    return this.http.get('/users/me');
  }

  userLogin(data) {
    return this.http.post('/users/login', data);
  }

  getUsers() {
    return this.http.get('/users');
  }

}
